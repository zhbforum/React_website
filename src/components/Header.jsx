import React from 'react';
import './Header.css';

const Header = () => 
{
  return (
    <header className="header">
      <div className="logo">Rise Creative</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="sign-in">Sign In</button>
        <button className="get-started">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
