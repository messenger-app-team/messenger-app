import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

// create the side bar for contacts here and add on the left or right side of the chat app div

class Contacts extends Component {
    render() {

        return (
          <div className='contact-list'>
            <Nav defaultActiveKey='/home' className='flex-column'>
              <Nav.Link eventKey='link-1'>Haley</Nav.Link>
              <Nav.Link eventKey='link-2'>JZ</Nav.Link>
              <Nav.Link eventKey='link-3'>Ray</Nav.Link>
              <Nav.Link eventKey='link-4'>
                Ruben
              </Nav.Link>
            </Nav>
          </div>
        );
    }
};

export default Contacts;