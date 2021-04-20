import React, {useState, useRef} from "react";

import {useAuth} from '../contexts/AuthContext'
import {Container, Form, Button, Card, Alert} from 'react-bootstrap'
import {Link, useHistory} from "react-router-dom";

function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {signup, currentUser} = useAuth()
  const [error, setError] = useState("")
  const[loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e){
    e.preventDefault()
      if(passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError('Passwords do not match')
       
      }
    
      try{
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        history.push("/")
      } catch {
        setError('Failed to create account')
      }
      setLoading(false);
  }

  return (
     <>
     <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh", backgroundColor: "none"}}>
       <div className="w-100" style={{maxWidth: "400px"}}>
    <Card >
    {error && <Alert variant="danger">{error}</Alert>}
     <Card.Body>
       <h2 className = "text-center mb-4">Sign Up</h2>
       <Form>
         <Form.Group id="email">
           <Form.Label>Email</Form.Label>
           <Form.Control type="email" ref={emailRef}required/>
         </Form.Group>
         <Form.Group id="password">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" ref={passwordRef} required/>
         </Form.Group>
         <Form.Group id="password-confirm">
           <Form.Label>Password Confirmation</Form.Label>
           <Form.Control type="password" ref={passwordConfirmRef} required/>
         </Form.Group>
       </Form>
       <Button onClick={handleSubmit} disabled={loading} type="submit"  className = "w-100 text-center mt-2" >Signup</Button>
     </Card.Body>
     <div className = "w-100 text-center mt-2">
        Already have an account? <Link to="/Login">Log In</Link>
      </div>
    </Card>
    </div>
      </Container>
  </>
  )
}

export default Signup;
