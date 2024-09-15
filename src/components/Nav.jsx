// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav >
      <ul style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap : '80px',
    }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;