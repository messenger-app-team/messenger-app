import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

class InputBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msgValue: '',
    };
  };

  updateInput = (event) => {
    this.setState({ msgValue: event.target.value })
  };

  handleClick = () => {
    console.log('Your input value is: ', this.state.msgValue)
  };

  render() {
    return (
      <InputGroup className='mb-3'>
        <FormControl
          type="text" onChange={this.updateInput}
          placeholder='Message'
          aria-label='Message'
          aria-describedby='basic-addon2'
        />
        <InputGroup.Append>
          <Button onClick={this.handleClick} variant='outline-secondary'>
            Send
          </Button>
        </InputGroup.Append>
      </InputGroup>
    );
  };
};

export default InputBox;
