import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import "./style.css";

export default function Index({ msg }) {
  const [userName, setUserName] = useState("You");
  const { message, chatId, from, to } = msg;
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser.email !== from) {
      db.ref()
        .child("users")
        .orderByChild("email")
        .equalTo(from)
        .once("value", (snapshot) => {
          if (snapshot && snapshot.val()) {
            console.log(Object.values(snapshot.val())[0].userName);
            setUserName(Object.values(snapshot.val())[0].userName);
          }
        });
    }
  }, []);
  return (
    <div className="d-flex flex-column" style={{ marginTop: "25px" }}>
      <div className={userName === "You" ? "msg-right" : "msgLeft"}>
        {userName === "You" ? (
          <>
            <span
              style={{
                backgroundColor: "#b4d6fd",
                color: "#000000",
                padding: "10px 10px",
                borderRadius: "6px",
                marginRight: "10px",
              }}
            >
              {message}
            </span>{" "}
            {": " + userName}
          </>
        ) : (
          <>
            {userName + ": "}

            <span
              style={{
                backgroundColor: "pink",
                color: "#000000",
                padding: "10px 10px",
                borderRadius: "6px",
              }}
            >
              {message}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
