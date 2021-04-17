import React, { Component } from 'react';
import './style.css';


class MsgArea extends Component {
  render() {
    return (
      <div className='msg-area'>
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
