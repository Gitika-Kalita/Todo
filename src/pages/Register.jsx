import Form from "react-bootstrap/Form";
import React from 'react';
import { useState , useEffect} from 'react'
import Image from "../assets/images/2.png";
import { useFirebase, } from '../context/Firebase'
import { Routes, Link, useNavigate } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import 'firebase/auth'; 

const RegisterPage = () => {

const firebase = useFirebase();
  console.log(firebase)

 
 const navigate = useNavigate()


 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');


 const handleSubmit = async (e) => {
  
  e.preventDefault();
  console.log("signin up a user....")
  const Result = await firebase.signupUserWithEmailAndPassword(email, password);
  alert("successful")
  setEmail("");
  setPassword("")
      
};


  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
    <Row className="justify-content-center">
      <Col md={6} sm={12} className="shadow rounded bg-light p-5">
        <h2 className="text-center mb-4">Sign Up</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Your Email Address</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              placeholder="Enter your email address"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Create a Strong Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              id="password"
              placeholder="Password"
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">
              Create Account
            </Button>
            <p className="mt-4">
              Already have an Account , please <Link to="/">Sign In</Link>.
            </p>
          </div>
        </Form>
      </Col>

      <Col md={6} sm={12} className="text-center item-center d-none d-md-block">
        {/* You can replace 'Image' with your actual image source */}
        <img src={Image} alt="Your Application" className="img-fluid" />
      </Col>
    </Row>
  </div>
  );
};

export default RegisterPage;