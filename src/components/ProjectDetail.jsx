import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <div>
      <div className="project-detail">
        <div className="project-card">
          <img src={project.image} alt={project.title} />

          <div className="project-content">
            <h2>{project.title}</h2>

            <p className="description">{project.description}</p>

            <p className="tech">
              <b>Tech:</b> {project.tech}
            </p>

            <div className="buttons">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn github"
                >
                  GitHub
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn live"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
