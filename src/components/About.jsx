import React from 'react';
import profileImg from './assets/profile.jpg';
function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImg} alt="Jaison A" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>

          <p>
            Hi, I'm <strong>Jaison A</strong>, a 3rd-year B.E Computer Science
            student. I am passionate about web development and creating
            user-friendly websites.
          </p>

          <p>
            I completed my frontend training at Elocias Software Pvt Ltd, where
            I built real-world projects using HTML, CSS, and JavaScript.
          </p>

          <p>
            Currently, I am learning backend and aiming to become a Full Stack
            Developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
