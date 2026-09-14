import React from 'react';
import { Link } from 'react-router-dom';
import localData from '../../data/data.json';

const featuredProjects = localData.projects.slice(0, 3).map((project, index) => ({
  ...project,
  impact:
    index === 0
      ? 'Built a responsive product showcase that presents the app clearly and professionally.'
      : index === 1
        ? 'Created a polished personal brand platform focused on strong storytelling and easy navigation.'
        : 'Developed a practical full-stack campus solution that highlights real-world problem solving and end-to-end features.',
}));

function Home() {
  return (
    <>
      <section id="home" className="home reveal">
        <div className="home-overlay">
          <div className="home-content">
            <h1>Hi, I'm Jaison A</h1>
            <h2>FullStack Developer | CSE Student</h2>

            <p>I build responsive and user-friendly web applications using modern technologies.</p>

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

      <section className="featured-projects reveal">
        <div className="section-heading">
          <span className="section-tag">Featured work</span>
          <h2>Featured Projects</h2>
        </div>

        <div className="featured-projects-grid">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="featured-project-card reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img src={project.image} alt={project.title} />

              <div className="featured-project-body">
                <h3>{project.title}</h3>

                <p className="featured-project-summary">{project.description}</p>

                <div className="featured-project-tags">
                  {project.tech.split(',').map((item, itemIndex) => (
                    <span key={`${project.id}-${itemIndex}`}>{item.trim()}</span>
                  ))}
                </div>

                <p className="featured-project-impact">
                  <strong>Impact:</strong> {project.impact}
                </p>

                <div className="project-links">
                  {project.github && project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}
                  {project.live && project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
