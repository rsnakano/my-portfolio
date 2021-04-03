import React from 'react';
import { NavLink } from 'react-router-dom';
import './Piece1.css';


function Piece1() {
  return(
    <html>
      <div className="article-post">
        <div className="post-info">
          <span className="post-date">Mar 31, 2021</span>
          <hr></hr>
          <p>Building a Portfolio</p>
        </div>
        <div className="post-body">
          <p><i>
            Note: The first part of this website (without the articles
            section) was built around August 2020. The second part was
            built on March 2021.
          </i></p>
          <p>
            In the midst of the pandemic that suspended classes for almost half a year by then,
            my organization, ACM (Association for Computing Machinery), wanted to take that time
            to build the organization's official website. To do this, they wanted to get volunteers
            to be trained by a senior member on web development (front end), so I volunteered.
            Our whole training was basically a hands-on experience, since after a brief session explaining
            the basics, we were given a week to build our own online portfolio, using HTML/CSS and
            ReactJS. I have to admit, I was both scared and excited, since this was my first foray into
            front-end web development, but I welcomed the challenge.
          </p>
          <h2>Planning</h2>
          <p>
            With the ol' pen & paper and virtually no drawing skills, I started off planning the design.
            I looked up different portfolios online to get some inspiration and decided in the end
            to opt for a more minimalistic look (totally not because it would've taken the least
            amount of effort) with yellow/black as the main colors. I didn't get to save the paper
            that I drew the initial design on, but the final design more or less reflected the original
            one pretty well. The next step was to figure out how to actually implement the design using
            HTML/CSS.
          </p>
          <h2>Implementation</h2>
          <p>
            I divided up the original design into three parts: The main part of the page, the part
            that users will get to see first, the About Me part, where I'll get to display my boring
            hobbies, almost non-existent skills, a short description about myself, and a barren Projects
            part—all for the world (but mostly my future employer) to see, yippee. I decided to focus
            on one part at a time, breaking down the whole page in small bits that I could work on.
          </p>
          <p>
                The main part of the page was, in hindsight, not the hardest part to implement. However,
            since I was inexperienced and it was the very first part I had to work with, it probably
            took the longest time to get right. Upon hardcoding the values, my mentor quickly taught
            me the importance of webpage flexibility and flexbox. The goal here was to make the page
            adapt and look good in a lot of screens. After getting that done, I started gaining momentum.
            With the help of my mentor and the power of stack overflow, w3schools, geeksforgeeks, and a
            whole slew of other websites, I managed to get the rest of the parts done. The problems I
            got to encounter were nothing too big—most were just general styling questions (How do I
            center this within this, etc.), which I guess would be the same problems front-end web devs
            face.
          </p>
          <p>
                During building, I realized that I also had to create a navbar and a footer, as most
            pages implement. I built the footer with relative ease, followed a tutorial for the navbar
            and got that down pretty quickly. At last, the final—or at least the first serviceable
            version—was complete. I generated the build for the project and used surge for the
            hosting. It was finally up and ready, with a couple of days to spare before the week ended.
          </p>
          <h2>Updating</h2>
          <p>
                After a few months, and during a week-long break from university, I wanted to extend my
            portfolio and add more than a single page. I wanted to add a blog-style 'Articles' page
            to share some of my thoughts and experiences, relating to my field. Designing the new page
            didn't take long, but implementing the ability to route different pages was quite tricky.
            After getting that functionality down, I refactored parts of the code, organized media files
            and compartmentalized parts in general. Afterwards, I implemented the Articles page and posted
            the two first, and hopefully not the last, articles (including this one) on my portfolio.
          </p>
          <h2>Last Thoughts</h2>
          <p>
                Looking back, I had a really fun time doing this portfolio. There were ups and downs, but I loved
            the experience. Most importantly though, more than just gaining valuable technical skills and know-how,
            I had a chance to look inward and thought about what and who I was as a programmer, and helped
            me gain confidence on marketing my skills. I don't know if I'll be updating this article if I
            update the site in the future, but I'm sure I'll use a lot of stack overflow and
            it'll look awesome.
          </p>
        </div>
        <div className="about-author">
            <hr></hr>
            <h3>
              Ryosuke Nakano
              <a href="https://github.com/rsnakano"> @rsnakano</a>
            </h3>
            <p>
            Student at the University of the Philippines-Diliman. Likes to read, write, play video games,
            and watch movies/tv shows. Currently trying to learn Japanese while failing miserably.
            </p>
        </div>
      </div>
    </html>
  );
}

export default Piece1;
