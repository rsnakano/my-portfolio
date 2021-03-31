import React from 'react';
import Toolbar from '../../../../components/Toolbar/Toolbar';
import { NavLink } from 'react-router-dom';
import './Piece2.css';
import fb from '../../../../resources/fb-icon.png'
import twitter from '../../../../resources/twitter-logo.png'
import github from '../../../../resources/github-icon.png'

function Piece2() {
  return(
    <html>
      <div className="article-post">
        <div className="post-info">
          <span className="post-date">Apr 1, 2021</span>
          <hr></hr>
          <p>First Hackathon Experience!</p>
        </div>
        <div className="post-body">

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

export default Piece2;
