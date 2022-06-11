import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./ProjectCard.css";

function ProjectCard({ projectData }) {
  return (
    <div className="project-card">
      <Link to={`/project/${projectData.id}`}></Link>

      <div className="projectcard-image">
        <Link to={`/projects/${projectData.id}`}>
          <img src={projectData.image} alt="the project" />
          <div className="projectcard-title">
            <h3>{projectData.title}</h3>
          </div>
        </Link>

        <div className="projectcard-summary">
          <h4>{projectData.summary}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
