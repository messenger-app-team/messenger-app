import React, { Component } from "react";
import Avatar from "./Avatar";
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

          <Card style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href='#'>Card Link</Card.Link>
              <Card.Link href='#'>Another Link</Card.Link>
            </Card.Body>
          </Card>
        );
    };
};

export default MsgArea;