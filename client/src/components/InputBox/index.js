// import react and css style
import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./style.css";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

const InputBox = ({ updateMessages, selectedChat, chatId }) => {
  const { currentUser } = useAuth();
  const [msgValue, setState] = useState("");

  const updateInput = (event) => {
    setState(event.target.value);
  };

  const handleClick = async () => {
    try {
      await db.ref("chats").push({
        chatId,
        message: msgValue,
        to: selectedChat,
        from: currentUser.email,
        type: selectedChat === "public" ? selectedChat : "private",
        timestamp: Date.now(),
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      setState("");
    }
  };

const handleKey = (event) =>{
  if (event.key === "Enter") {
    handleClick();
  }
};

  return (
    <InputGroup className="msg-input">
      <FormControl
        value={msgValue}
        type="text"
        onChange={updateInput}
        onKeyPress={handleKey}
        placeholder="Message"
        aria-label="Message"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <Button
          onClick={handleClick}
          variant="outline-secondary"
          disabled={chatId == undefined || null}
        >
          Send
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default InputBox;
