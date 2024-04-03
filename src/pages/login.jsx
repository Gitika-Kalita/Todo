import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from 'react';
import { useState, useEffect} from 'react'
import { useFirebase} from '../context/Firebase'
import 'firebase/auth';

import {  Router, Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {

 const firebase = useFirebase();
 const navigate = useNavigate()


 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

  useEffect(() =>{
    if(firebase.isLoggedIn){
      navigate("/Dashboard")
    }
  },[ firebase, navigate])

 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Login a user...")
  try {
    const Result = await firebase.signinUserWithEmailAndPassword(email, password);
    console.log("Successful", Result);
   
  } catch (error) {
    
    console.error("Error signing up:", error.message);
    
    alert("Error signing up: " + error.message);
  }
};


  return (
    <div className="container vh-100 d-flex align-items-center">
      <div className="row justify-content-center">
        <div className="col-md-6 shadow rounded bg-light p-4">
          <h2 className="text-center mb-4">Sign In</h2>

          <Form onSubmit={handleSubmit}>
            
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email"> Enter Your Registered  Email</Form.Label>
              <Form.Control
                onChange={ e => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
                placeholder="Enter your email address"
              />
             
            </Form.Group>

            
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Enter Your Password</Form.Label>
              <Form.Control
              onChange={ e => setPassword(e.target.value)}
              value={password}
                type="password"
                id="password"
                placeholder="Password"
              />
            </Form.Group>


           
            <div className="text-center">
              <Button variant="primary" type="submit">
                Sign In
              </Button>
            </div>
           
          </Form>
          <div className="text-center">
            <Button className="mt-3" variant="danger" type="submit" onClick={ firebase.signinWithGoogle}>
                SignIn With google
              </Button>
              <p>If you are a new user, please <Link to="/Register">register here</Link>.</p>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default LoginPage;




 