import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
export const Web = () => {
  const navigate=useNavigate();
  const getstarted=()=>{
    navigate('/login');
  }
  return (
    <div className='header'>
      <img src="./header.jpg" alt="Background" className="header-image" />
      <div className="header-content">
        <h2>Furever Friends</h2>
        <p>Welcome to the website. We care about your pet.</p>

        <button className="btn" onClick={getstarted}> Get Started </button>
      </div>
    </div>
  );
};
