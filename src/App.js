import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import './App.css';
import mypic from './resources/profpic.png';
import yellowtrans from './resources/canary-yellow-trans.png';
import gamesL from './resources/games.png';
import watchingL from './resources/watching.png';
import writingL from './resources/writing.png';
import readingL from './resources/reading.png';
import sportsL from './resources/sports.png';
import pythonL from './resources/python.png';
import cL from './resources/c.png';
import htmlL from './resources/html.png';
import jsL from './resources/js.png';
import pikabot from './resources/pika.png'
import portfolio from './resources/portfolio.png'
import fb from './resources/fb-icon.png'
import twitter from './resources/twitter-logo.png'
import github from './resources/github-icon.png'

function App() {
  return (
    <html>
      <Toolbar />
      <div className="div1">
        <div>
          <div className="textdiv">
            <h1 className="my-header">RYOSUKE NAKANO</h1>
            <p className="quote">Developing software for the developing world.</p>
          </div>
          <img src={mypic} className="img1" alt="test-image"></img>
        </div>
      </div>
      <a id="about-part">
        <div className="div2">
          <div className="body2">
            <img src={yellowtrans} className="img2" alt="canary-yellow"></img>
            <div>
              <h1 className="hobbies">Hobbies</h1>
              <ul className="col-list">
                <li>
                  <div>
                    <span>VIDEO GAMES</span>
                    <img src={gamesL} className="gamesL" alt="games"></img>
                  </div>
                </li>
                <li>
                  <div>
                    <span>TV SHOWS & MOVIES</span>
                    <img src={watchingL} className="watchingL" alt="watching"></img>
                  </div>
                </li>
                <li>
                  <div>
                    <span>WRITING</span>
                    <img src={writingL} className="writingL" alt="writing"></img>
                  </div>
                </li>
                <li>
                  <div>
                    <span>READING FICTION</span>
                    <img src={readingL} className="readingL" alt="reading"></img>
                  </div>
                </li>
                <li>
                  <div>
                    <span>SPORTS</span>
                    <img src={sportsL} className="sportsL" alt="sports"></img>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="skills">Skills</h1>
              <ul className="col-list">
                <li>
                  <div>
                    <span>PYTHON</span>
                    <img src={pythonL} alt="python"></img>
                  </div>
                </li>
                <li>
                  <div>
                    <span>C++</span>
                    <img src={cL} alt="c"></img>
                  </div>
                </li>
                <li>
                  <div>
                    <span>HTML/CSS</span>
                    <img src={htmlL} alt="html"></img>
                  </div>
                </li>
                <li>
                  <div>
                    <span>JAVASCRIPT</span>
                    <img src={jsL} alt="js"></img>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="aboutme">About Me</h1>
              <p className="about-para">I'm a 19-year old student in <br />the
              Philippines and currently taking <br />up
              Computer Science at the University<br />of
              the Philippines-Diliman.<br />
              Nice to meet you!
              </p>
            </div>
          </div>
        </div>
      </a>
      <a id="projects-part">
        <div className="div3">
          <div className="body3">
            <h1 className="projects">PROJECTS</h1>
            <div>
              <div>
                <p>Pikachu Translator</p>
                <a href="https://twitter.com/pikatranslate" target="_blank">
                  <img src={pikabot} className="proj1-img" alt="pikabot"></img>
                </a>
              </div>
              <p className="about-pika">A fun twitter bot that translates tweets
              into pikachu's 'language', which is basically
              just a bunch of random 'pika-pika's, among others.
              </p>
            </div>
            <div>
              <div>
                <p>My Portfolio!</p>
                <a href="/">
                  <img src={portfolio} className="proj2-img" alt="portfolio"></img>
                </a>
              </div>
              <p className="about-portfolio">An online portfolio to showcase my abilities,
              projects, and a little bit about my tastes and personality.
              </p>
            </div>
          </div>
        </div>
      </a>
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

export default App;
