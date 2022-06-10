import React, { useState } from "react";

// Imports
import { useNavigate } from "react-router-dom";

// Styles
import "./ProjectForm.css";

function ProjectForm(projectData) {
  // State
  const [project, postProject] = useState(projectData.map);

  // Hooks
  const navigate = useNavigate();

  // Action and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    postProject((prevProjectData) => ({
      ...prevProjectData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = window.localStorage.getItem("token");
    console.log("handleSubmit", project, token);

    if (
      token &&
      project.title &&
      project.summary &&
      project.goal &&
      project.image &&
      project.is_open &&
      project.date_created &&
      project.issue &&
      project.tools &&
      project.science &&
      project.closing_date
    )
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}projects/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
              title: project.title,
              summary: project.summary,
              goal: parseInt(project.goal),
              image: project.image,
              is_open: project.is_open === "on",
              date_created: new Date(project.date_created).toISOString(),
              issue: project.issue,
              tools: project.tools,
              science: project.science,
              closing_date: new Date(project.closing_date).toISOString(),
            }),
          }
        );
        const data = await response.json();
        console.log(data);
        // THIS IS HOW YOU NAVIGATE AUTOMATICALLY
        navigate(`/project/${data.id}`);
      } catch (err) {
        console.log(err);
      }
  };

  const formSections = [
    {
      id: "title",
      label: "Title:",
      placeholder: "Project title",
      type: "text",
    },
    {
      id: "summary",
      label: "Summary:",
      placeholder: "Project summary",
      type: "text",
    },
    {
      id: "goal",
      label: "Goal: $",
      placeholder: "Project goal amount",
      type: "text",
    },
    {
      id: "image",
      label: "Image:",
      placeholder: "Include Image",
      type: "url",
    },
    {
      id: "is_open",
      label: "Is this project open for donations?",
      placeholder: "Select if project is open",
      type: "checkbox",
    },
    {
      id: "date_created",
      label: "Date Created:",
      placeholder: "Date created",
      type: "date",
    },
    {
      id: "issue",
      label: "The issue:",
      placeholder: "What is the issue at hand",
      type: "text",
    },
    {
      id: "tools",
      label: "The tools:",
      placeholder: "What tools do you need?",
      type: "text",
    },
    {
      id: "science",
      label: "The science:",
      placeholder: "What is the science",
      type: "text",
    },
    {
      id: "closing_date",
      label: "Project Closing Date:",
      placeholder: "Closing date",
      type: "date",
    },
  ];

  return (
    <div className="form-wrapper">
      <form>
        {formSections.map((section, key) => {
          return (
            <div className="form-section">
              <div className="form-label">
                <div key={`${key}-${section.id}`}>
                  <label htmlFor={section.id}>{section.label}</label>
                </div>
                <div className="form-input">
                  <input
                    type={section.type}
                    id={section.id}
                    placeholder={section.placeholder}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          );
        })}
        <button className="primary-button" type="submit" onClick={handleSubmit}>
          Create Project
        </button>
      </form>
    </div>
  );
}

export default ProjectForm;
