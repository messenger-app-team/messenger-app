import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class InputBox extends Component {
  render() {
    return (
      // <div clasName='input-container'>
      //   <input
      //     id='msg-input'
      //     className='msg-input'
      //     type='text'
      //     placehodler='Message...'
      //   />
      // </div>

       <InputGroup className="mb-3">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Button</Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}

export default InputBox;
