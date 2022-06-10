import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Data
// import { oneProject } from "../data";

// Components
import UserDetail from "../components/UserDetail/UserDetail";
import PledgerDetail from "../components/PledgerDetail/PledgerDetail";

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
      <div className="projectpage-img">
        <img src={projectData.image}></img>
      </div>
      <div className="project-section-title">
        <h3>
          Project made by <UserDetail owner={projectData.owner} />
        </h3>
      </div>
      <h4>Posted on {projectData.date_created}</h4>
      <div className="project-section-title">
        <h3>
          The Issue <br></br>
        </h3>
      </div>
      <h3>{projectData.issue}</h3>
      <div className="project-section-title">
        <h3>
          The Tools <br></br>
        </h3>
      </div>
      <h3>{projectData.tools}</h3>
      <div className="project-section-title">
        <h3>
          The Science <br></br>
        </h3>
      </div>
      <h3>{projectData.science}</h3>

      <h4>{`Status: ${projectData.is_open}`}</h4>
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
      <Link to={`/pledges/${id}`}>Donate</Link>

      {/* <PledgeForm projectId={id} />*/}
      {/* This is referring to the pledge form project id to ensure that it will show on the project page */}
    </div>
  );
}

export default ProjectPage;
