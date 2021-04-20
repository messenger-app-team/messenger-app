// import react and css style
import React, { Component } from 'react';
import './style.css';

// build child components that takes input data from parent components then render it on to the page.

// Use state to push array of messages into a state and props.value.map and indside of where you want that process to occur

class MsgArea extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='msg-area'>
        <div class='d-flex flex-row'>
          <div class='p-2'>Received Messages</div>
        </div>
        <div class='d-flex flex-column'>
          <div class='p-2'>Sent Messages</div>
          <p>{this.props.value}</p>
        </div>
      </div>
    );
  }
}

export default MsgArea;
