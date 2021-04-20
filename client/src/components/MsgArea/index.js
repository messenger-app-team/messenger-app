// import react and css style
import React, { Component } from 'react';
import './style.css';

// build child components that takes input data from parent components then render it on to the page.
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
