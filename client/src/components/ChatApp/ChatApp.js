// import react and css style
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

// import other children components to this parent components.
// import Avatar from './Avatar';
import NavBar from "../NavBar";
import InputBox from "../InputBox/index";
import MsgArea from "../MsgArea";
import Contacts from "../Contacts";
import { db } from "../../firebase";
import capitalizeFirstLetter from "../../helpers";
import { useAuth } from "../../contexts/AuthContext";

// build a function to handle data flow from other children's components.
function ChatApp() {
  const { currentUser } = useAuth();
  const [currentUserName, setCurrentUserName] = useState("");
  const [msgValue, setMsgValue] = useState("");
  const [msgArr, setMsgArr] = useState([]);
  const [selectedChat, setSelectedChat] = useState("");
  const [chatId, setChatId] = useState();

  useEffect(() => {
    // setMsgArr([]);
    console.log(chatId);

    db.ref()
      .child("users")
      .orderByChild("email")
      .equalTo(currentUser.email)
      .once("value", async (snapshot) => {
        if (snapshot && snapshot.val()) {
          setCurrentUserName(Object.values(snapshot.val())[0].userName);
        }
      });

    if (chatId && selectedChat !== "public") {
      console.log("where40");
      console.log(chatId);

      db.ref()
        .child("chats")
        .orderByChild("chatId")
        .equalTo(chatId)
        .on("value", (snapshot) => {
          if (snapshot && snapshot.val()) {
            setMsgArr(Object.values(snapshot.val()));
          }
        });
    } else {
      console.log("where50");

      db.ref()
        .child("chats")
        .orderByChild("type")
        .equalTo("public")
        .on("value", (snapshot) => {
          if (snapshot && snapshot.val()) {
            setMsgArr(Object.values(snapshot.val()));
          }
        });
    }
  }, [chatId]);

  const updateChatId = (chatId) => {
    setChatId(chatId);
  };

  const updateSelectedChat = (selectedChat) => {
    setSelectedChat(selectedChat);
  };

  const clearMessages = () => {
    setMsgArr([]);
  };

  const updateMessages = (newMsg) => {
    setMsgValue(newMsg);
    // add to end of of the msgArr pass off msgArr to component that will accept, will need to decide how to send off right now it's value
    setMsgArr([...msgArr, newMsg]);
  };

  return (
    <>
      <NavBar currentUserName={currentUserName} />

      <Container>
        <Row className="mt-5">
          <Col className="message-app" sm={3}>
            <Contacts
              updateSelectedChat={updateSelectedChat}
              selectedChat={selectedChat}
              updateChatId={updateChatId}
              currentUserName={currentUserName}
              clearMessages={clearMessages}
            />
          </Col>
          {selectedChat && (
            <Col className="message-app" sm={9}>
              <Row>
                <h4 className="chatHeading">
                  {capitalizeFirstLetter(selectedChat)}
                </h4>
              </Row>

              <div className="message-window">
                <Row>
                  <MsgArea messages={msgArr} selectedChat={selectedChat} />
                </Row>
                <Row>
                  <Col>
                    <InputBox
                      updateMessages={updateMessages}
                      selectedChat={selectedChat}
                      chatId={chatId}
                      currentUserName={currentUserName}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}

export default ChatApp;