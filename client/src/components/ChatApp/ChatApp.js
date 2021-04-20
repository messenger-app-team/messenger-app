// import react and css style 
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

// import other children components to this parent components.
// import Avatar from './Avatar';
import NavBar from '../NavBar';
import InputBox from '../InputBox/index';
import MsgArea from '../MsgArea';
import Contacts from '../Contacts';

// build a function to handle data flow from other children's components.
function ChatApp() {
  const [msgValue, setMsgValue] = useState('');
  const [msgArr, setMsgArr] = useState([]);

  const addUser = (newMsg) => {
    console.log(newMsg)
    setMsgValue(newMsg)
    // add to end of of the msgArr pass off msgArr to component that will accept, will need to decide how to send off right now it's value
    setMsgArr([...msgArr, newMsg]);
  };

  return (
    <>
      <NavBar />

      <Container>
        <Row>
          <Col className='message-app' sm={4}>
            <Contacts />
          </Col>

          <Col className='message-app' sm={8}>
            <div className='message-window'>
              <Row>
                <MsgArea value={msgValue} />
              </Row>
            </div>
          </Col>
        </Row>
        <Row className='fixed-bottom'>
          <Col  sm={{ span: 8, offset: 4 }}>
            <div className='message-window'>
            <InputBox fun={addUser} />
            </div>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default ChatApp;
