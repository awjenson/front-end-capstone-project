import React from 'react';
import logo from './images/logo-long-yellow.png';

function Nav() {
  return (
    <header id="nav">
      <nav className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Little Lemon Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order-online">Order online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;