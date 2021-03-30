import React from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import './Articles.css';
import fb from '../../resources/fb-icon.png'
import twitter from '../../resources/twitter-logo.png'
import github from '../../resources/github-icon.png'


function Articles() {
  return(
    <html>
      <div className="artdiv">
        <h1 className="articles-heading">ARTICLES</h1>
        <div className="article-col">
          <article>
            <h2>First Hackathon Experience!</h2>
            <p>Mar 30, 2021</p>
          </article>
          <article>
            <h2>Building A Portfolio</h2>
            <p>Apr 1, 2021</p>
          </article>
        </div>
      </div>
      <footer>
        <div></div>
        <div>
          <div>
            <a href="https://www.facebook.com/Ryo.JSN/" target="_blank">
              <img src={fb} alt="fb-ico"></img>
            </a>
            <a href="https://twitter.com/whyisryo" target="_blank">
              <img src={twitter} alt="twitter-ico"></img>
            </a>
            <a href="https://github.com/rsnakano" target="_blank">
              <img src={github} alt="github-ico"></img>
            </a>
          </div>
        </div>
        <div>
          <p>rsnakano@up.edu.ph</p>
        </div>
      </footer>
    </html>

  );
}

export default Articles;
