// import react and css style 
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './style.css';

// import other children components to this parent components.
// import Avatar from './Avatar';
import NavBar from '../NavBar';
import InputBox from '../InputBox/index';
import MsgArea from '../MsgArea';
import Contacts from '../Contacts';

// build a function to handle data flow from other children's components.
function ChatApp() {
  const [msgValue, setMsgValue] = useState('')

  const addUser = (newMsg) => {
    console.log(newMsg)
    setMsgValue(newMsg)
  };

  return (
    <>
      <NavBar />

      <Container>

        <Contacts />

        <div className='message-window fixed-bottom'>
          <MsgArea value={msgValue} />
          {/* <Avatar /> */}
          <InputBox fun={addUser} />
        </div>
      </Container>
    </>
  );
}

export default ChatApp;
