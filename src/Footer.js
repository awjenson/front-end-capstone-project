import React from 'react';
import logo from './images/logo-tall-green.png';

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Little Lemon Logo" />
        </div>
        <div className="footer-nav">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>
        <address className="footer-contact">
          <h4>Contact Us</h4>
          <p>123 Main Street, Chicago, IL 60601</p>
          <p>(123) 456-7890</p>
          <p>info@littlelemon.com</p>
        </address>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.instagram.com">Instagram</a></li>
            <li><a href="https://www.linkedin.com">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <p>&copy; 2025 Little Lemon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;