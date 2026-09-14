import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import localData from '../../data/data.json';

function Projects() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState(localData.projects);

  useEffect(() => {
    let isMounted = true;

    const loadProjects = async () => {
      try {
        const response = await fetch('http://localhost:8000/projects');
        if (!response.ok) {
          throw new Error('Backend unavailable');
        }

        const data = await response.json();

        if (isMounted) {
          setProjects(data);
        }
      } catch (error) {
        if (isMounted) {
          setProjects(localData.projects);
        }
        console.log(error);
      }
    };

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => navigate(`/projects/${project.id}`)}
            className="project-card"
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech:</strong> {project.tech}
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
        ))}
      </div>
    </section>
  );
}

export default Projects;
