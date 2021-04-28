import React, { useLayoutEffect, useState } from "react";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import "./style.css";
import capitalizeFirstLetter from "../../helpers";

export default function Index({ msg }) {
  const [userName, setUserName] = useState("");
  const { message, from } = msg;
  const { currentUser } = useAuth();

  useLayoutEffect(() => {
    if (currentUser.email !== from) {
      db.ref()
        .child("users")
        .orderByChild("email")
        .equalTo(from)
        .once("value", (snapshot) => {
          if (snapshot && snapshot.val()) {
            setUserName(Object.values(snapshot.val())[0].userName);
          }
        });
    }else{
      setUserName("You");
    }
  });
  return (
    <div className="d-flex flex-column" style={{ marginTop: "25px" }}>
      <div className={userName === "You" ? "msg-right" : "msgLeft"}>
        {userName === "You" ? (
          <>
            <span className = "youMessages">
              {message}
            </span>
          </>
        ) : (
          <>
            <span className = "othersUserName">
              {capitalizeFirstLetter(userName)}
            </span>

            <span className= "otherUserMessage">
              {message}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
