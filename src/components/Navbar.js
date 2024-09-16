import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">Logo</Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Projects</Link>
          <Link to="/chats" className="navbar-link">Chats</Link>
        </div>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search" className="navbar-search" />
        <Link to="/signup" className="navbar-link">Sign In</Link>
      </div>
    </nav>
  );
}

export default Navbar;
