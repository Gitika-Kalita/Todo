import { render } from "react";
import { App } from "./app.jsx,";
import { FirebaseProvider } from "./context/Firebase.jsx";
import { BrowserRouter } from 'react-router-dom'


render(
 <BrowserRouter>
    <FirebaseProvider>
    <App />
  </FirebaseProvider>
 </BrowserRouter>
 ,
   
  document.getElementById("app")
);