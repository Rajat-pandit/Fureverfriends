import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate,useLocation } from 'react-router-dom';
import {Home} from "./Components/Home";
import {Login} from "./Components/login";
import {Signup} from "./Components/Signup";
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <div className="app">
      
      <NavbarVisibility/>
    
      
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />


        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
const NavbarVisibility=() =>{
  const location=useLocation();
  return location.pathname !=='/login' && location.pathname !== '/signup'? <Navbar/>:null;
}

export default App
