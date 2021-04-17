// this is send button
import React from "react";
import { Button } from "react-bootstrap";

function Send() {
  function handleClick(e) {
    e.preventDefault();
    console.log('Send was clicked.');
  }

  return <Button onClick={handleClick}>Send</Button>;
}

export default Send;