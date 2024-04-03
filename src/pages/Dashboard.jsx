import Button from "react-bootstrap/Button";
import React from 'react';
import { useState, useEffect} from 'react'
import { useFirebase,} from '../context/Firebase'
import {  Router, Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import MyNavBar from "../components/NavBar";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import LoginPage from "./login";




  

export const Dashboard = ( {handleSignOut, todoText, index, user }) => {



    const firebase = useFirebase();
     const navigate = useNavigate();
   
     
    


     function handleSignOut() {
        const auth = getAuth();

        signOut(auth)
          .then(() => {
            navigate("/")
            alert("Sign-out successful");

          })
          .catch((error) => {
            // An error happened.
            console.error("Sign-out error:", error);
          });
      }


  return (
    <>
    
    <div  style={{width: '100vw', height: '100vh', backgroundColor: '#e0b0ff'}}>
    < MyNavBar  handleSignOut={handleSignOut } user={user} /> 
           <div className="d-flex justify-content-center align-items-center" >
            <TodoForm />
           </div>  
           <div className="d-flex  justify-content-center align-items-center">
           <TodoItem
           key={index}
           todo={todoText}
           />
           </div>
            
    </div>
    </>
       
                  
            
  
  )
}