import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
// import Avatar from './Avatar';
import NavBar from '../NavBar';
import InputBox from '../InputBox/index';
import MsgArea from '../MsgArea';
// import Send from './Send';

function ChatApp() {
  return (
    <>
      <NavBar />

      <Container>
        <Row>
          <Col>
            <div className='contact-list'>
              <ul>
                <li>Ray</li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className='message-window fixed-bottom'>
              <MsgArea />
              {/* <Avatar /> */}
              <InputBox />
              {/* <Send /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ChatApp;
