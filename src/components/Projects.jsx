import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'TimeZone Watch Website',
      description:
        'A responsive watch product website built using HTML, CSS, and JavaScript.',
      tech: 'HTML, CSS, JavaScript',
      image: 'https://picsum.photos/200/300',
      github: '#',
      live: '#',
    },
    {
      title: 'Portfolio Website',
      description:
        'Personal portfolio website to showcase my skills and projects.',
      tech: 'React, CSS',
      image: 'https://picsum.photos/200/300',
      github: '#',
      live: '#',
    },
    {
      title: 'Anti-Spam Detection System',
      description:
        'A cybersecurity project to detect and prevent spam messages.',
      tech: 'Python, ML',
      image: 'https://picsum.photos/200/300',
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {/* Image */}
            <img src={project.image} alt={project.title} />

            {/* Content */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech:</strong> {project.tech}
            </p>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
