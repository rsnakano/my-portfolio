import React from 'react';
import './Toolbar.css';
import { NavLink } from 'react-router-dom';

const toolbar = props => (
  <header className="navbar">
    <nav>
      <div className="nav-items">
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/articles'>Articles</NavLink></li>
          <li><a href="/#about-part">About</a></li>
          <li><a href="/#projects-part">Projects</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
