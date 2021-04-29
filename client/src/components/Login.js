import React, { useState, useRef } from "react";
import { useAuth } from '../contexts/AuthContext'
import { Container, Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom";

import "./Login.css";

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, currentUser } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError('Failed to create account')
    }
    setLoading(false);
  }

  return (
    <>
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", backgroundColor: "none" }}>
        <div className=" w-100" style={{ maxWidth: "400px" }}>
          <Card className="login">
            {error && <Alert variant="danger">{error}</Alert>}
            <Card.Body>
              <h2 className="textStyle text-center mb-4">Log In</h2>
              <Form className="emailPasswordSect">
                <Form.Group className="textStyle" id="email">

                  <Form.Control className="inputField" placeholder="Email" type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group className="textStyle" id="password">
                  <Form.Control className="inputField" placeholder="Password" type="password" ref={passwordRef} required />
                </Form.Group>
              </Form>
              <Button onClick={handleSubmit} disabled={loading} type="submit" className="buttonField w-100 text-center mt-2" >Log In</Button>
            </Card.Body>
            <div className=" textStyle w-100 text-center mt-2">
              Don't have an account? <Link to="/Signup">Sign Up</Link>
            </div>
          </Card>
        </div>
      </Container>
    </>
  )
}

export default Login;
