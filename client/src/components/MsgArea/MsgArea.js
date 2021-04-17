import React, { Component } from 'react';
import Avatar from '../Avatar/Avatar';
import Card from 'react-bootstrap/Card';

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
        <p class='sent-msg'>Sent Message</p>
        <p class='rcvd-msg'>Recieved Message</p>
      </div>
    );
  }
}

export default MsgArea;
