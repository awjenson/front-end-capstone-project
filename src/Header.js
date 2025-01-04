import React from 'react';
import logo from './images/Asset 16@4x.png'; // Tell Webpack this JS file uses this image

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" />
      <h1>Welcome to Little Lemon</h1>
    </header>
  );
}

export default Header;