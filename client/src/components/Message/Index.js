import React, { useEffect, useLayoutEffect, useState } from "react";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import "./style.css";
import capitalizeFirstLetter from "../../helpers";

export default function Index({ msg }) {
  const [userName, setUserName] = useState("You");
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
    }
  });
  return (
    <div className="d-flex flex-column" style={{ marginTop: "25px" }}>
      <div className={userName === "You" ? "msg-right" : "msgLeft"}>
        {userName === "You" ? (
          <>
            <span
              style={{
                backgroundColor: "#b4d6fd",
                color: "black",
                padding: "10px",
                borderRadius: "6px",
                marginRight: "10px",
              }}
            >
              {message}
            </span>
          </>
        ) : (
          <>
            <span
              style={{
                backgroundColor: "#F5F5F5",
                color: "black",
                padding: "10px 6px",
                marginRight: "10px",
                borderRadius: "50px",
              }}
            >
              {capitalizeFirstLetter(userName)}
            </span>

            <span
              style={{
                backgroundColor: "pink",
                color: "black",
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
