// import react and css style
import React, { useEffect, useState, Fragment } from "react";
import { Navbar, Nav, FormControl, Form, Button, Alert } from "react-bootstrap";
// import other components
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
// import AsyncSelect from "react-select/async";
import { db } from "../../firebase";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import profileImage from "../../images/user.png";
import capitalizeFirstLetter from "../../helpers";

// build navbar to handle other utility functions.
function NavBar({ currentUserName }) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const { logout, currentUser } = useAuth();
  const history = useHistory();

  const addUserToChat = (e, option) => {
    db.ref("Contacts")
      .child(currentUserName)
      .once("value", async (snap) => {
        if (snap && snap.val()) {
          const friends = Object.values(snap.val());
          if (friends.filter((e) => option in e).length === 0) {
            const makeObject = {};
            makeObject[option] = true;
            await db.ref("Contacts").child(currentUserName).push(makeObject);
            delete makeObject[option];
            makeObject[currentUserName] = true;
            await db.ref("Contacts").child(option).push(makeObject);
          }
        } else {
          const makeObject = {};
          makeObject[option] = true;
          await db.ref("Contacts").child(currentUserName).push(makeObject);
          delete makeObject[option];
          makeObject[currentUserName] = true;
          await db.ref("Contacts").child(option).push(makeObject);
        }
      });

  };

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  const handleSearch = (query) => {
    setIsLoading(true);
    db.ref("users")
      .orderByChild("userName")
      .startAt(query.trim().toLowerCase())
      .once("value", (snap) => {
        setOptions(Object.values(snap.val()));
        setIsLoading(false);
      });
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Messenger</Navbar.Brand>
        {error && <Alert variant="danger">{error}</Alert>}
        <Nav className="mr-auto">
          <Nav.Link variant="link" onClick={handleLogout}>
            Log Out
          </Nav.Link>
        </Nav>
        {/* <Form inline> */}
        <AsyncTypeahead
          filterBy={() => true}
          id="async-example"
          isLoading={isLoading}
          labelKey="userName"
          minLength={1}
          onSearch={handleSearch}
          options={options}
          placeholder="Search for a user..."
          renderMenuItemChildren={(option, props) => (
            <div
              key={option.uid}
              onClick={(e) => {
                addUserToChat(e, option.userName);
              }}
            >
              <img
                alt={option.userName}
                src={profileImage}
                style={{
                  height: "24px",
                  marginRight: "10px",
                  width: "24px",
                }}
              />
              <span>{option.userName}</span>
            </div>
          )}
        />
        {/* </Form> */}
        <span className="m-2">{capitalizeFirstLetter(currentUserName)}</span>
      </Navbar>
    </>
  );
}

export default NavBar;
