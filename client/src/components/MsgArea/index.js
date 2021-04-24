// import react and css style
import React, { Component, useState, useEffect } from "react";
import "./style.css";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import Message from "../Message/Index";

// build child components that takes input data from parent components then render it on to the page.

// Use state to push array of messages into a state and props.value.map and indside of where you want that process to occur

const MsgArea = (props) => {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (props.chatId && props.selectedChat !== "public") {
      db.ref()
        .child("chats")
        .orderByChild("chatId")
        .equalTo(props.chatId)
        .on("value", (snapshot) => {
          if (snapshot && snapshot.val()) {
            props.replaceMessages(Object.values(snapshot.val()));
          }
        });
    } else {
      db.ref()
        .child("chats")
        .orderByChild("type")
        .equalTo("public")
        .on("value", (snapshot) => {
          if (snapshot && snapshot.val()) {
            console.log(Object.values(snapshot.val()));
            props.replaceMessages(Object.values(snapshot.val()));
          }
        });
    }
  }, []);

  return (
    <div className="msg-area">
      {props.messages &&
        props.messages.length > 0 &&
        props.messages.map((msg) => <Message msg={msg} key={msg.uid} />)}
    </div>
  );
};

// class MsgArea extends Component {
//   state = {
//     messages: [],
//   };

//   componentDidMount() {
//     console.log(this.props.chatId, "Rendered  with chatId");
//     if (this.props.chatId) {
//       db.ref()
//         .child("chats")
//         .orderByChild("chatId")
//         .equalTo(this.props.chatId)
//         .once("value", (snapshot) => {
//           this.props.replaceMessages(Object.values(snapshot.val()));
//           console.log(Object.values(snapshot.val()), "yo snapshot initial");
//         });
//       db.ref()
//         .child("chats")
//         .orderByChild("chatId")
//         .equalTo(this.props.chatId)
//         .on("value", (snapshot) => {
//           console.log(snapshot.val(), "yo snapshot");
//         });
//     }
//   }

//   render() {
//     return (
//       <div className="msg-area">
//         {this.props.messages.map((msg) => {
//           if (msg.from == currentUser.email) {
//             return (
//               <div className="d-flex flex-column">
//                 <div className="p-2">Sent Messages</div>
//                 <p>{this.props.value}</p>
//               </div>
//             );
//           } else {
//             <div className="d-flex flex-row">
//               <div className="p-2">Received Messages</div>
//             </div>;
//           }
//         })}

//         {this.props.value && (
//           <div className="d-flex flex-column">
//             <div className="p-2">Sent Messages</div>
//             <p>{this.props.value}</p>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

export default MsgArea;
