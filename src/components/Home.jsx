import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-overlay">
        <div className="home-content">
          <h1>Hi, I'm Jaison A</h1>
          <h2>FullStack Developer | CSE Student</h2>

          <p>
            I build responsive and user-friendly web applications using modern
            technologies.
          </p>

          <div className="home-buttons">
            <a href="/resume_jaison.pdf" download className="btn">
              Download Resume
            </a>

            <Link to="/contact" className="btn secondary">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
