// import react and css style
import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  FormControl,
  Form,
  Button,
  Alert,
  NavLink,
} from 'react-bootstrap';
// import other components
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import PublicChat from '../PublicChat/PublicChat';

// Key to use for navbar links
const messenger_key = 'messenger';

// build navbar to handle other utility functions.
function NavBar() {
  const [error, setError] = useState('');
  // Set key depending on which page the user is currently on
  const [activeKey, setActiveKey] = useState(messenger_key);
  const { logout } = useAuth();
  const history = useHistory();
  const messengerOpen = messenger_key === activeKey;

  async function handleLogout() {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  // for testing purposes
  const helloWorld = () => {
    
    console.log(`Hello world!`);
  ;
  };;

  return (
    <div className='nav-bar'>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand to='/'>Messenger</Navbar.Brand>

        {error && <Alert variant='danger'>{error}</Alert>}

        <Nav className='mr-auto'>
          <Router>
            <NavLink to='/public' onClick={helloWorld}>
              Chat
            </NavLink>
            <NavLink variant='link' onClick={handleLogout}>
              Log Out
            </NavLink>
            <Route path='/public' component={PublicChat} />
          </Router>
        </Nav>

        <Form inline>
          <FormControl
            type='text'
            placeholder='User Search'
            className='mr-sm-2'
          />
          <Button variant='outline-light'>Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default NavBar;
