import React from 'react';

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
            <a href="../public/resume_jaison.pdf" download>
              <button className="btn">Download Resume</button>
            </a>

            <a href="#contact">
              <button className="btn secondary">Contact Me</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
