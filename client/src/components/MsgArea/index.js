// import react and css style
import React from "react";
import "./style.css";
import Message from "../Message/Index";

// build child components that takes input data from parent components then render it on to the page.

// Use state to push array of messages into a state and props.value.map and indside of where you want that process to occur

const MsgArea = ({ messages, selectedChat }) => {
  return (
    <div className="msg-area" key={selectedChat}>
      {messages &&
        messages.length > 0 &&
        messages.map((msg) => <Message msg={msg} />)}
    </div>
  );
};

export default MsgArea;