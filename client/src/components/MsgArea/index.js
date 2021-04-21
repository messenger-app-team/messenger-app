// import react and css style
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './style.css';

// build child components that takes input data from parent components then render it on to the page.

// Use state to push array of messages into a state and props.value.map and indside of where you want that process to occur

class MsgArea extends Component {
  render() {
    console.log(this.props);
    // Will need to add username here from the state?
    return (
      <div className='msg-area'>
        <Card className='msg-area' border='light'>
          <Card.Header>To: Username</Card.Header>
          <Card.Body>
            <Card.Text>
              <p>Received Message</p>
              <p>{this.props.value}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MsgArea;
