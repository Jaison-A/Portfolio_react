import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
function Projects() {
  // const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div
            key={index}
            // onClick={() => navigate(`/${project.title}`)}
            className="project-card"
          >
            <img src={project.image} alt={project.title} />
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
