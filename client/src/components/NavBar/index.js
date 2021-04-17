import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand href='#home'>Messenger</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#contacts'>Contacts</Nav.Link>
          <Nav.Link href='#logout'>Logout</Nav.Link>
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
    );
  }
}

export default NavBar;
