import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './style.css';
// import Avatar from './Avatar';
import NavBar from '../NavBar';
import InputBox from '../InputBox/index';
import MsgArea from '../MsgArea';
import Contacts from '../Contacts';
// import Send from './Send';

function ChatApp() {
  return (
    <>
      <NavBar />

      <Container>

            <Contacts />

        <div className='message-window fixed-bottom'>
          <MsgArea />
          {/* <Avatar /> */}
          <InputBox />
          {/* <Send /> */}
        </div>
      </Container>
    </>
  );
}

export default ChatApp;
