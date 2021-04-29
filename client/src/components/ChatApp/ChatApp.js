import React, { useState, useEffect } from "react";
// Firebase live database will handle real-time communication
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

// import other children components to this parent component.
import NavBar from "../NavBar";
import InputBox from "../InputBox/index";
import MsgArea from "../MsgArea";
import Contacts from "../Contacts";
import capitalizeFirstLetter from "../../helpers";

// build a function to handle data flow from other children's components.
function ChatApp() {
  // Update state to currrent user session, load message data from db
  const { currentUser } = useAuth();
  const [currentUserName, setCurrentUserName] = useState("");
  const [msgValue, setMsgValue] = useState("");
  const [msgArr, setMsgArr] = useState([]);
  const [selectedChat, setSelectedChat] = useState("");
  const [chatId, setChatId] = useState();

  // Connection to firebase live database to get and post new messages
  // Firebase live database will enable messages to be recieved in real time
  useEffect(() => {
    db.ref()
      .child("users")
      .orderByChild("email")
      .equalTo(currentUser.email)
      .once("value", async (snapshot) => {
        if (snapshot && snapshot.val()) {
          setCurrentUserName(Object.values(snapshot.val())[0].userName);
        }
      });
    // Public messages
    if (chatId && selectedChat !== "public") {
      db.ref()
        .child("chats")
        .orderByChild("chatId")
        .equalTo(chatId)
        .on("value", (snapshot) => {
          if (snapshot && snapshot.val()) {
            if (Object.values(snapshot.val())[0]?.chatId == chatId)
            setMsgArr(Object.values(snapshot.val()));
          }
        });
    } else {
      db.ref()
        .child("chats")
        .orderByChild("type")
        .equalTo("public")
        .on("value", (snapshot) => {
          if (snapshot && snapshot.val()) {
            if (
              Object.values(snapshot.val())[0]?.chatId.includes("public") ==
              chatId?.includes("public")
              )
            setMsgArr(Object.values(snapshot.val()));
          }
        });
    }
  }, [chatId]);

  // Check to see if id to update exists and updates, else new id is created
  const updateChatId = (chatId) => {
    setChatId(chatId);
  };

  // Set and update selected chat id
  const updateSelectedChat = (selectedChat) => {
    setSelectedChat(selectedChat);
  };

  // Set the state back to empty array
  const clearMessages = () => {
    setMsgArr([]);
  };

  // Add new message to end of msgArr and set state to update
  const updateMessages = (newMsg) => {
    setMsgValue(newMsg);
    // Spread operator add to end of of the msgArr
    setMsgArr([...msgArr, newMsg]);
  };

  return (
    <>
      <NavBar currentUserName={currentUserName} />

      <Container className= "chatWindow" >
        <Row className="messengerSection mt-5">
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

              <div className="messageW message-window">
                <Row className="messageW">
                  <MsgArea messages={msgArr} selectedChat={selectedChat} />
                </Row >
                <Row >       
                  <Col >
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
