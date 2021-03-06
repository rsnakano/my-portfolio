import React from 'react';
import './Footer.css';
import fb from '../../resources/fb-icon.png'
import twitter from '../../resources/twitter-logo.png'
import github from '../../resources/github-icon.png'


function Footer() {
  return(
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
  );
}

export default Footer;
