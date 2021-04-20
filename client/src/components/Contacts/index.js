import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import './style.css';

// create the side bar for contacts here and add on the left or right side of the chat app div

class Contacts extends Component {
    render() {

        return (
          <div className='contact-menu'>
            <Nav defaultActiveKey='/home' className='flex-column'>
              <h4>Contacts</h4>
              <Nav.Link eventKey='link-1' className='user-contact'>
                Haley
              </Nav.Link>
              <Nav.Link eventKey='link-2' className='user-contact'>
                JZ
              </Nav.Link>
              <Nav.Link eventKey='link-3' className='user-contact'>
                Ray
              </Nav.Link>
              <Nav.Link eventKey='link-4' className='user-contact'>
                Ruben
              </Nav.Link>
            </Nav>
          </div>
        );
    }
};

export default Contacts;