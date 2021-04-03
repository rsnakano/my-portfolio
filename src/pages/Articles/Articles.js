import React from 'react';
import { NavLink } from 'react-router-dom';
import './Articles.css';


function Articles() {
  return(
    <html>
      <div className="artdiv">
        <h1 className="articles-heading">ARTICLES</h1>
        <div className="article-col">
          <article>
            <h2><NavLink to="/articles/first-hackathon">First Hackathon Experience!</NavLink></h2>
            <p>Apr 3, 2021</p>
          </article>
          <article>
            <h2><NavLink to="/articles/building-portfolio">Building a Portfolio</NavLink></h2>
            <p>Mar 31, 2021</p>
          </article>
        </div>
      </div>
    </html>
  );
}

export default Articles;
