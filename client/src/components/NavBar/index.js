// import react and css style
import React, { Component, useState} from 'react';
import { Navbar, Nav, FormControl, Form, Button, Alert } from 'react-bootstrap';
// import other components
import {Link, useHistory} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";

// build navbar to handle other utility functions.
function NavBar () {
  const [error, setError] = useState('')
  const{logout} = useAuth();
  const history = useHistory();

   async function handleLogout() {
      setError('')
      try {
        await logout()
        history.push('/login')

      } catch {
        setError('Failed to log out')
      }
    }

    return (
      <>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand href='#home'>Messenger</Navbar.Brand>
        {error && <Alert variant="danger">{error}</Alert>}
        <Nav className='mr-auto'>
          <Nav.Link variant = "link" onClick={handleLogout}>Log Out</Nav.Link>
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
      </>
    );
  
}

export default NavBar;
