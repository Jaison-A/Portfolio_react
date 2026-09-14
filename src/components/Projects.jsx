import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import localData from '../../data/data.json';

const filterOptions = ['All', 'React', 'Frontend', 'Full Stack', 'Backend'];

function Projects() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState(localData.projects);
  const [activeFilter, setActiveFilter] = useState('All');

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

  const filteredProjects = projects.filter((project) => {
    const tech = project.tech.toLowerCase();

    if (activeFilter === 'All') return true;

    if (activeFilter === 'React') {
      return tech.includes('react');
    }

    if (activeFilter === 'Frontend') {
      return /(html|css|javascript|react)/.test(tech) && !/(node|express|mongodb|jwt)/.test(tech);
    }

    if (activeFilter === 'Full Stack') {
      return /(react|html|css|javascript)/.test(tech) && /(node|express|mongodb|jwt)/.test(tech);
    }

    if (activeFilter === 'Backend') {
      return /(node|express|mongodb|jwt)/.test(tech);
    }

    return true;
  });

  return (
    <section id="projects" className="projects reveal">
      <h2>My Projects</h2>

      <div className="project-filters">
        {filterOptions.map((option) => (
          <button
            key={option}
            type="button"
            className={activeFilter === option ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setActiveFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="project-container">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            onClick={() => navigate(`/projects/${project.id}`)}
            className="project-card reveal"
            style={{ transitionDelay: `${index * 100}ms` }}
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
