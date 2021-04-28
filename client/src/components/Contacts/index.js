import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import "./style.css";
import capitalizeFirstLetter from "../../helpers";

// create the side bar for contacts here
// and add on the left or right side of the chat app div
const Contacts = ({
  updateSelectedChat,
  selectedChat,
  updateChatId,
  currentUserName,
  clearMessages,
}) => {
  const { currentUser } = useAuth();
  const [contacts, setContacts] = useState([
    {
      public: true,
    },
  ]);

  // useEffect will run a db query each time currentUserName changes
  // Live db will push new messages to each user in the convo 'on value' change
  // linting error due to 'race conditions' may need bug fix
  useEffect(async () => {
    if (currentUserName)
      db.ref("Contacts")
        .child(currentUserName)
        .on("value", async (snap) => {
          if (snap && snap.val()) {
            const temp = Object.values(snap.val());
            setContacts([...contacts, ...temp]);
          }
        });
  }, [currentUserName]);

  // use effect will run when slectedChat changes and update the chat id (or create it)
  useEffect(async () => {
    if (currentUserName) {
      let Id = `${selectedChat}_${currentUserName}`;
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
        Id = `${currentUserName}_${selectedChat}`;
        updateChatId(Id);
      }
    }
  }, [selectedChat]);
  
  // Create a new chat id with usernames of each person and update
  const handleSelect = async (receiver) => {
    let Id = `${receiver}_${currentUserName}`;
    updateSelectedChat(receiver);
    clearMessages([]);
    let chatId = await db
      .ref()
      .child("chats")
      .orderByChild("chatId")
      .equalTo(Id)
      .once("value");

    if (chatId.exists()) {
      updateChatId(Id);
    } else {
      Id = `${currentUserName}_${receiver}`;
      updateChatId(Id);
    }
  };

  return (
    <div className="contact-menu">
      <Nav className="flex-column">
        <h4 className="chatHeading">Contacts</h4>
        <div className="contactsArea">
          {contacts &&
            contacts.length > 0 &&
            contacts.map((contact) => {
              return (
                <Nav.Link
                  key={Object.keys(contact)[0]}
                  eventKey="link-1"
                  className="user-contact"
                  onClick={() => {
                    if (selectedChat !== Object.keys(contact)[0]) {
                      //do nothing
                      console.log("here");
                      handleSelect(Object.keys(contact)[0]);
                    }
                  }}
                >
                  {capitalizeFirstLetter(Object.keys(contact)[0])}
                </Nav.Link>
              );
            })}
        </div>
      </Nav>
    </div>
  );
};

export default Contacts;
