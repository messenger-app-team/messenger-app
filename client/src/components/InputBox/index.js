// import react and css style
import React, { Component, useState, useEffect } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./style.css";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

const InputBox = ({ updateMessages, selectedChat, chatId }) => {
  const { currentUser } = useAuth();
  const [msgValue, setState] = useState("");
  useEffect(() => {
    console.log(chatId, "ohiyo");
  }, []);

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
    console.log("Your input value is: ", msgValue);
    // updateMessages(msgValue);
  };
  return (
    <InputGroup className="mb-3 msg-input">
      <FormControl
        value={msgValue}
        type="text"
        onChange={updateInput}
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

// build a function to take input value and pass it to parent components.
// class InputBox extends Component {
//   state = {
//     msgValue: "",
//   };

//   updateInput = (event) => {
//     this.setState({ msgValue: event.target.value });
//   };

//   handleClick = async () => {
//     try {
//       await db.ref("chats").push({
//         message: this.state.msgValue,
//         to: this.props.selectedChat,
//         // from:""
//         timestamp: Date.now(),

//         // uid: this.state.user.uid
//       });
//     } catch (error) {
//       console.log(error.message);
//     } finally {
//       this.setState({ msgValue: "" });
//     }
//     console.log("Your input value is: ", this.state.msgValue);
//     this.props.fun(this.state.msgValue);
//   };

//   render() {
//     return (
//       <InputGroup className="mb-3 msg-input">
//         <FormControl
//           value={this.state.msgValue}
//           type="text"
//           onChange={this.updateInput}
//           placeholder="Message"
//           aria-label="Message"
//           aria-describedby="basic-addon2"
//         />
//         <InputGroup.Append>
//           <Button onClick={this.handleClick} variant="outline-secondary">
//             Send
//           </Button>
//         </InputGroup.Append>
//       </InputGroup>
//     );
//   }
// }

export default InputBox;
