import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from './images/logo-long-yellow.png';

// Citing use of AI
// I used both GitHub Copilot in VS Code and Cursor's AI Code Editor to help me code this file.

export default function Nav() {
  return (
    <header id="nav">
      <nav className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Little Lemon Logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/order-online">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}