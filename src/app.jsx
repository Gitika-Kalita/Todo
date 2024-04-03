import { Routes, Route, } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterPage from './pages/Register'
import LoginPage from './pages/login';
import { Dashboard } from './pages/Dashboard';
import './app.css'


export function App() {
  

  return <Routes>
    
     <Route path='/' element={<LoginPage />} />
      <Route path= '/Dashboard' element= {< Dashboard />} />
      <Route path='/Register' element={< RegisterPage />} />  
  </Routes>

    
}