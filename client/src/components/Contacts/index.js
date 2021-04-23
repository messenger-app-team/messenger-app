import React, { useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import './style.css';
import UserContacts from '../UserContacts';
import UserMessages from '../UserMessages';;

const messages_key = 'messages';
const contacts_key = 'contacts';

// create the side bar for contacts here and add on the left or right side of the chat app div

function Contacts() {
  // current state set to contacts only for now
  const [activeKey, setActiveKey] = useState(contacts_key);
  const openM

  // onSelect will set the event key of the state to whichever tab was clicked
  return (
    <div className='sidebar d-flex'>
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant='tabs' className='justify-content-center'>
          <Nav.Item>
            <Nav.Link eventKey={contacts_key}>Contacts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={messages_key}>Messages</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className='overflow-auto flex-grow-1'>
          <Tab.Pane eventKey={contacts_key}>
            <UserContacts />
          </Tab.Pane>
          <Tab.Pane eventKey={messages_key}>
            <UserMessages />
          </Tab.Pane>
        </Tab.Content>
        <Button className='sidebar-btn'></Button>
      </Tab.Container>
    </div>
  );
}

export default Contacts;


// Will need to continue working on getting the users id on the page once connected to db