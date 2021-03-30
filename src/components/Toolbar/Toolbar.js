import React from 'react';
import './Toolbar.css';


const toolbar = props => (
  <header className="navbar">
    <nav>
      <div className="nav-items">
        <ul>
          <li><a href="#about-part">About</a></li>
          <li><a href="#projects-part">Projects</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
