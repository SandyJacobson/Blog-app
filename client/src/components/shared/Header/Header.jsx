import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
    <div className="container">
      <h3>Sports Team Chronicles</h3>
      <nav className="nav-links">
          <ul>
            <li><a href="#about">about us</a></li>
            <li><a href="#portfolio">portfolio</a></li>
          </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;