import React from 'react';
import logo from './logo.svg';
import './App.css';
import mypic from './profpic.png';
import yellowtrans from './canary-yellow-trans.png';
import gamesL from './games.png';
import watchingL from './watching.png';
import writingL from './writing.png';
import readingL from './reading.png';
import sportsL from './sports.png';
import pythonL from './python.png';
import cL from './c.png';
import htmlL from './html.png';
import jsL from './js.png';
import pikabot from './pikatranslate.png'

function App() {
  return (
    <html>
      <div className="div1">
        <div className="body1">
          <h1 className="my-header">RYOSUKE NAKANO</h1>
          <p className="quote">Developing software for the developing world.</p>
          <img src={mypic} className="img1" alt="test-image"></img>
          <div className="line1"></div>
        </div>
      </div>
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
            the Philippines-Diliman. I speak<br /> Filipino,
            English, and some Japanese. <br />
            Nice to meet you!
            </p>
          </div>
        </div>
      </div>
      <div className="div3">
        <div className="body3">
          <h1 className="projects">PROJECTS</h1>
          <div>
            <p className="about-pika">A fun twitter bot that translates tweets<br />
            into pikachu's language (pika-speak, for short),<br />
            which is a bunch of random 'pika-pika's<br />
            and the like.
            </p>
            <img src={pikabot} className="proj1-img" alt="pikabot"></img>
          </div>
        </div>
      </div>
    </html>
  );
}

export default App;
