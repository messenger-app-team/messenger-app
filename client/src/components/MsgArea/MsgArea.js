import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
// import Avatar from '../Avatar/Avatar';

class MsgArea extends Component {
  render() {
    return (
      // <li className={`message ${this.props.appearance} appeared`}>
      //     <Avatar></Avatar>
      //     <div className="text_wrapper">
      //         <div className="text">{this.props.message}</div>
      //     </div>
      // </li>
      <div className='msg-area'>
        {/* <Row>
          <Col md={4}>
            <p class='rcd-msg'>Received Message</p>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <p class='sent-msg'>Sent Message</p>
          </Col>
        </Row> */}

        <div class='d-flex flex-row'>
          <div class='p-2'>Received Messages</div>
        </div>
        <div class='d-flex flex-row-reverse'>
          <div class='p-2'>Sent Messages</div>
        </div>
      </div>
    );
  }
}

export default MsgArea;
