import React, { Component } from 'react';

class InputBox extends Component {
  render() {
    return (
      <div clasName='input-container'>
        <input
          id='msg-input'
          className='msg-input'
          type='text'
          placehodler='Message...'
        />
      </div>
    );
  }
}

export default InputBox;
