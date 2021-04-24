// import react and css style
import React, { useEffect, useState } from "react";
import { Navbar, Nav, FormControl, Form, Button, Alert } from "react-bootstrap";
// import other components
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import AsyncSelect from "react-select/async";
import { db } from "../../firebase";

// build navbar to handle other utility functions.
function NavBar() {
  const [error, setError] = useState("");
  const [results, setResults] = useState([
    { value: "public", label: "public" },
  ]);

  const { logout } = useAuth();
  const history = useHistory();

  useEffect(() => {
    db.ref("users")
      .orderByChild("userName")
      .on("value", (snap) => {
        const newResults = [];
        Object.values(snap.val()).forEach((result) => {
          newResults.push({ value: result.userName, label: result.userName });
        });
        newResults.push({ value: "public", label: "public" });
        setResults(newResults);
      });
  }, []);

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  const loadOptions = (inputValue, callback) => {
    db.ref("users")
      .orderByChild("userName")
      .startAt(inputValue.trim().toLowerCase())
      .on("value", (snap) => {
        const newResults = [];
        Object.values(snap.val()).forEach((result) => {
          newResults.push({ value: result.userName, label: result.userName });
        });
        newResults.push({ value: "public", label: "public" });
        setResults(newResults);
        return results.map((i) => {
          return {
            label: i.userName,
            value: i.userName,
          };
        });
      });
  };

  const handleInputChange = (newValue) => {
    db.ref("users")
      .orderByChild("userName")
      .startAt(newValue.trim().toLowerCase())
      .on("value", (snap) => {
        const newResults = [];

        Object.values(snap.val()).forEach((result) => {
          newResults.push({ value: result.userName, label: result.userName });
        });
        newResults.push({ value: "public", label: "public" });

        setResults(newResults);
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

        <Form inline>
          <AsyncSelect
            cacheOptions
            loadOptions={loadOptions}
            // defaultOptions={results}
            onInputChange={handleInputChange}
          />
          {/* <FormControl
            type="text"
            placeholder="User Search"
            className="mr-sm-2"
          />
          <Button variant="outline-light">Search</Button> */}
        </Form>
      </Navbar>
    </>
  );
}

export default NavBar;
