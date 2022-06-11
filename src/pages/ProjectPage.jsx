import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Data
// import { oneProject } from "../data";

// Components
import UserDetail from "../components/UserDetail/UserDetail";
import PledgerDetail from "../components/PledgerDetail/PledgerDetail";

// Styles
import "./ProjectPage.css";

function ProjectPage() {
  // State
  const [projectData, setProjectData] = useState({ pledges: [] });

  // Hooks
  const { id } = useParams();

  // Action & Helpers
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
  }, [id]);

  //   Loading State
  if (!projectData) {
    return <h3>Loading project...</h3>;
  }
  // Call the image, summary, issues, tools, science etc in here
  return (
    <div className="projectpage-wrapper">
      <div className="project-section-title">
        <h2>{projectData.title}</h2>
      </div>
      <div className="project-section-summary">
        <h3>{projectData.summary}</h3>
      </div>
      <div className="projectpage-img">
        <img src={projectData.image}></img>
      </div>
      <div className="project-section-title">
        <h3>
          The Issue <br></br>
        </h3>
      </div>
      <div className="project-section-input">
        <h3>{projectData.issue}</h3>
      </div>
      <div className="project-section-title">
        <h3>
          The Tools <br></br>
        </h3>
      </div>
      <div className="project-section-input">
        <h3>{projectData.tools}</h3>
      </div>
      <div className="project-section-title">
        <h3>
          The Science <br></br>
        </h3>
      </div>
      <div className="project-section-input">
        <h3>{projectData.science}</h3>
      </div>
      <div className="project-section-title">
        <h3>
          Project made by <UserDetail owner={projectData.owner} />
        </h3>
      </div>
      <div className="project-section-date-created">
        <h4>Posted on {projectData.date_created}</h4>
      </div>
      <div className="status">
        <h4>{`Status: ${projectData.is_open}`}</h4>
      </div>
      <div className="pledges">
        <h3>Pledges:</h3>
        <ul>
          {projectData.pledges.map((pledgeData, key) => {
            return (
              <li>
                ${pledgeData.amount} from{" "}
                <PledgerDetail supporter={pledgeData.supporter} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pledge-link">
        <Link to={`/pledges/${id}`}>Pledge towards this project!</Link>
      </div>
    </div>
  );
}

export default ProjectPage;
