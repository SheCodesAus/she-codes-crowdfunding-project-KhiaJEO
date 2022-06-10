import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./ProjectCard.css";

function ProjectCard({ projectData }) {
  return (
    <div className="project-card">
      <div className="projectcard-title">
        <Link to={`/project/${projectData.id}`}></Link>
      </div>
      <div className="projectcard-image">
        <Link to={`/projects/${projectData.id}`}>
          <img src={projectData.image} alt="the project" />
          <h3>{projectData.title}</h3>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
