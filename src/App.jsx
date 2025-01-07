import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Home} from "./Components/Home";
import {Login} from "./Components/login";
import {Signup} from "./Components/Signup";
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app">
      <Navbar></Navbar>
    </div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
