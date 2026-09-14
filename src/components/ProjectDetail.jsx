import React from 'react';
import { useParams } from 'react-router-dom';
import localData from '../../data/data.json';

function ProjectDetail() {
  const { id } = useParams();
  const project = localData.projects.find((item) => item.id === Number(id)) || null;

  if (!project) return <p>Project not found.</p>;

  return (
    <div>
      <div className="project-detail-page">
        <div className="project-detail-card">
          <img src={project.image} alt={project.title} className="project-detail-image" />

          <div className="project-detail-content">
            <h2>{project.title}</h2>

            <p className="description">{project.description}</p>

            <p className="tech">
              <b>Tech:</b> {project.tech}
            </p>

            <div className="buttons">
              {project.github && project.github !== '#' && (
                <a href={project.github} target="_blank" rel="noreferrer" className="btn github">
                  GitHub
                </a>
              )}

              {project.live && project.live !== '#' && (
                <a href={project.live} target="_blank" rel="noreferrer" className="btn live">
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
