import React from 'react';
import { Link } from 'react-router-dom'
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
            <Link to='/add-post'><li><a href="#add-post">create post</a></li></Link>
          </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;