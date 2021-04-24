import React, { Component, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import "./style.css";

// create the side bar for contacts here and add on the left or right side of the chat app div

const Contacts = ({ updateSelectedChat, selectedChat, updateChatId }) => {
  const { currentUser } = useAuth();

  useEffect(async () => {
    let Id = `${selectedChat}_${currentUser.uid}`;
    updateSelectedChat(selectedChat);

    let chatId = await db
      .ref()
      .child("chats")
      .orderByChild("chatId")
      .equalTo(Id)
      .once("value");

    if (chatId.exists()) {
      updateChatId(Id);
    } else {
      Id = `${currentUser.uid}_${selectedChat}`;
      updateChatId(Id);
    }
  }, []);

  const handleSelect = async (receiver) => {
    let Id = `${receiver}_${currentUser.uid}`;
    updateSelectedChat(receiver);

    let chatId = await db
      .ref()
      .child("chats")
      .orderByChild("chatId")
      .equalTo(Id)
      .once("value");

    if (chatId.exists()) {
      updateChatId(Id);
    } else {
      Id = `${currentUser.uid}_${receiver}`;
      updateChatId(Id);
    }
  };

  return (
    <div className="contact-menu">
      <Nav defaultActiveKey="/home" className="flex-column">
        <h4>Contacts</h4>
        <Nav.Link
          eventKey="link-1"
          className="user-contact"
          onClick={() => {
            handleSelect("public");
          }}
        >
          Public Room
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Contacts;
