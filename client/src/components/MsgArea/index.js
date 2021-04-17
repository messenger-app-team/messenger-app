import React, { Component } from 'react';
import InputBox from '../InputBox/index';
import './style.css';


class MsgArea extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='msg-area'>
        <div class='d-flex flex-row'>
          <div class='p-2'>Received Messages</div>
        </div>
        <div class='d-flex flex-row-reverse'>
          <div class='p-2'>Sent Messages{this.props.value}</div>
        </div>
      </div>
    );
  }
}

export default MsgArea;
