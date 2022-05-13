import React from "react";

// Components
import ProjectForm from "../components/ProjectForm/ProjectForm";

function ProjectFormPage() {
  return (
    <div className="projectform-page-wrapper">
      <div id="project-form">
        <h1>Create a new project</h1>
        <ProjectForm />
      </div>
    </div>
  );
}

export default ProjectFormPage;
