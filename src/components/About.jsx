import React from 'react';
import profileImg from '../assets/profile.jpg';

function About() {
  return (
    <section id="about" className="about reveal">
      <div className="about-container">
        {/* Profile Image */}
        <div className="about-image">
          <div className="about-image-frame">
            <img
              src={profileImg}
              alt="Jaison A - Software Developer"
            />
          </div>
        </div>

        {/* About Content */}
        <div className="about-content">
          <span className="about-kicker">Software Developer</span>
          <h2>About Me</h2>

          <p>
            Hi, I'm <strong>Jaison A</strong>, a 4th-year B.E. Computer Science and Engineering
            student, graduating in 2027. I have a strong interest in{' '}
            <strong>MERN Stack development, web development, and software engineering</strong>.
          </p>

          <p>
            I enjoy building responsive, user-friendly, and practical web applications that combine
            clean interfaces with reliable backend functionality. I’m interested in understanding
            how different parts of an application work together, from the frontend experience to
            APIs, databases, and server-side logic.
          </p>

          <p>
            Currently, I’m working as a <strong>Software Developer Intern at Enyard</strong>, where
            I contribute to both frontend and backend development. This experience has given me
            practical exposure to building application features, working with APIs and databases,
            debugging issues, and collaborating on real-world software projects.
          </p>

          <p>
            Beyond coding, I’m always interested in learning new technologies and improving the way
            I build software. My goal is to grow into a
            <strong> well-rounded software developer</strong> who can turn ideas into useful,
            scalable, and maintainable applications.
          </p>

          {/* Quick Information */}
          <div className="about-info reveal">
            <div className="about-info-item">
              <span className="about-info-title">Education</span>
              <span>B.E. Computer Science</span>
            </div>

            <div className="about-info-item">
              <span className="about-info-title">Graduation</span>
              <span>2027</span>
            </div>

            <div className="about-info-item">
              <span className="about-info-title">Role</span>
              <span>Software Developer Intern</span>
            </div>

            <div className="about-info-item">
              <span className="about-info-title">Focus</span>
              <span>MERN Stack Development</span>
            </div>
          </div>

          <div className="about-highlights reveal">
            <h3>What I Bring</h3>
            <ul className="about-highlights-list">
              <li>
                Full-stack problem solving with a strong focus on clean UI and practical
                functionality.
              </li>
              <li>Understanding of APIs, databases, and how frontend and backend work together.</li>
              <li>Clean, maintainable code with attention to responsiveness and usability.</li>
              <li>
                Curiosity, teamwork, and a constant learning mindset that helps me improve quickly.
              </li>
            </ul>
          </div>

          <div className="about-journey reveal">
            <h3>My Journey</h3>
            <div className="journey-timeline">
              <div className="timeline-item">
                <span className="timeline-year">2026 June</span>
                <p>Software Developer Intern at Enyard</p>
              </div>

              <div className="timeline-item">
                <span className="timeline-year">2025</span>
                <p>
                  Focused on portfolio projects, frontend polish, and learning modern web
                  development practices.
                </p>
              </div>

              <div className="timeline-item">
                <span className="timeline-year">2024</span>
                <p>
                  Built foundational projects and strengthened my understanding of full-stack
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
