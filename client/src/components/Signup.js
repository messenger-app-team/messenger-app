import React, { useState, useRef } from "react";

import { useAuth } from "../contexts/AuthContext";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { db } from "../firebase";

function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (nameRef.current.value.trim() === "") {
      return setError("User name is required!");
    }

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      const user = await db
        .ref()
        .child("users")
        .orderByChild("userName")
        .equalTo(nameRef.current.value.toLowerCase().trim())
        .once("value");

      if (user.exists()) {
        return setError("User Name Already Taken!");
      }

      const signedUp = await signup(
        emailRef.current.value,
        passwordRef.current.value
      );

      await db.ref("users").push({
        uid: signedUp.user.uid,
        userName: nameRef.current.value.toLowerCase().trim(),
        email: emailRef.current.value.trim(),
        timestamp: Date.now(),
      });
      
      history.push("/");
    } catch (error) {
      setError("Failed to create account");
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", backgroundColor: "none" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            {error && <Alert variant="danger">{error}</Alert>}
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              <Form>
                <Form.Group id="username">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type="text" ref={nameRef} required />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
              </Form>
              <Button
                onClick={handleSubmit}
                disabled={loading}
                type="submit"
                className="w-100 text-center mt-2"
              >
                Signup
              </Button>
            </Card.Body>
            <div className="w-100 text-center mt-2">
              Already have an account? <Link to="/Login">Log In</Link>
            </div>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Signup;
