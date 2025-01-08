import React from 'react';
import './Header.css';

export const Web = () => {
  return (
    <div className='header'>
      <img src="./header.jpg" alt="Background" className="header-image" />
      <div className="header-content">
        <h2>Furever Friends</h2>
        <p>Welcome to the website. We care about your pet.</p>
      </div>
    </div>
  );
};
