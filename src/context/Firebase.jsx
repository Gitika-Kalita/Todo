import { createContext, useContext , useState, useEffect} from 'react'
import { initializeApp } from 'firebase/app'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, } from 'firebase/auth'
import { getFirestore, collection, addDoc, doc, Firestore , getDocs, query, where, Query, deleteDoc} from 'firebase/firestore';

const FirebaseContext = createContext(null);


const firebaseConfig = {
    apiKey: "AIzaSyBPLHxuVkrLuCJyev9tZEW6iapzOmOJE-E",
    authDomain: "fir-web-app-ec063.firebaseapp.com",
    projectId: "fir-web-app-ec063",
    storageBucket: "fir-web-app-ec063.appspot.com",
    messagingSenderId: "479034868539",
    appId: "1:479034868539:web:0c3347ccfa381beb6f2d1e"
  };
  

  export const useFirebase = () => useContext(FirebaseContext);

  const firebaseApp = initializeApp(firebaseConfig)
  const firebaseauth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp)
  
  const googleProvider = new GoogleAuthProvider()
  
  export const FirebaseProvider = (props) => {
  
      const [user, setUser] = useState(null)
  
      useEffect(() =>{
          onAuthStateChanged(firebaseauth, user => {
              if(user) setUser(user);
              else setUser(null)
          })
      }, [firebaseauth, user])
  
       const signupUserWithEmailAndPassword = (email, password) => 
       createUserWithEmailAndPassword(firebaseauth, email, password);
  
       const signinUserWithEmailAndPassword = (email, password) => 
       signInWithEmailAndPassword(firebaseauth, email, password)
  
       const signinWithGoogle = () => 
       signInWithPopup(firebaseauth, googleProvider)
  
       
  
       const handleCreateTodo = async ( TodoText) =>{
           return  await addDoc(collection(firestore, 'Todos'),{
              userId: user.uid,
              TodoText
            })
       } 
  
       const listTodos = async () => {
          if(!user) return null;
         const collectionRef = collection(firestore, "Todos")
         const q = query(collectionRef, where("userId", "==", user.uid ));
          const snap = await getDocs(q);
          return snap;
       }
       //delete todo
       const deleteTodo = async (id) => {
          try {
              await deleteDoc(doc(firestore, "Todos", id));
              console.log("Todo deleted successfully");
          } catch (error) {
              console.error("Error deleting todo:", error);
          }
      }
      
  
  
  
       const isLoggedIn = user ? true : false;
  
      return (
          <FirebaseContext.Provider value={ {signupUserWithEmailAndPassword, deleteTodo,  signinUserWithEmailAndPassword,firebaseauth, signinWithGoogle, isLoggedIn, user, listTodos,handleCreateTodo}} >
              {props.children}
          </FirebaseContext.Provider>
      )
  }