import React from 'react';
import { NavLink } from 'react-router-dom';
import './Piece2.css';
import homescrn from '../../../../resources/home-screen.png'
function Piece2() {
  return(
    <html>
      <div className="article-post">
        <div className="post-info">
          <span className="post-date">Apr 3, 2021</span>
          <hr></hr>
          <p>First Hackathon Experience</p>
        </div>
        <div className="post-body">
          <p>
            Just recently, this March, another organization of mine, DSCUPD (Developer Student Clubs-UP Diliman),
            hosted the annual Diliman Solutions Challenge, an almost month-long hackathon focusing on Google
            technology-fueled solutions that tackled one of the 17 Sustainable Development Goals set by the
            United Nations. Along with three other like-minded friends, we participated under the team name
            Digital Design Solutions. Overall, we finished top 30 out of around 80 (estimated figure) proposals.
          </p>
          <p>
            We talked internally about which goals we'd want to work on, mainly Quality Education,
            Decent Work and Economic Growth, and Climate Action. Ultimately, we voted to focus on Decent Work
            and Economic Growth. Our app idea, istartUP, focused on creating a one-stop-hub on information and resources on
            how to register, set-up, and run a business in the Philippines. We saw a perfect opportunity
            because according to government statistics, there was a 4000% rise in registered online businesses during
            the lockdown.
          </p>
          <p>
            Using Google technologies like Kotlin and Firebase, we wanted to build a simple, lightweight app
            that would work on older devices while also looking modern.
          </p>
          <p><img src={homescrn} alt="home screen"></img></p>
          <p>
            Unfortunately, since the week that we were expected to build the prototype coincided with an exam and
            lots of assignments, so we only had the resources to make the application's mockups, which can be found
            <a href="https://drive.google.com/drive/folders/1j78_pMiWCbaBGWplRC7d0EPYFEyAaCLj?usp=sharing"> here</a>.
            Additionally, you can see our 2 minute pitch explaining our app below:
          </p>
          <p>
          <iframe src="https://www.youtube.com/embed/ut-K9qTFxOs"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </p>
          <p>
            Although the road was long and winded, we came out of the event with a very fulfilling experience.
            We might not have scored a podium finish, but we were really proud of our efforts. We got to think up
            a myriad of ways on how to help underprivileged communities find their footing in an increasingly
            punishing environment for a livelihood. I'd definitely recommend that experience to anyone, programmer
            or otherwise.
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

export default Piece2;
