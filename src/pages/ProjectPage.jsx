import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Data
// import { oneProject } from "../data";

// Components
import ProjectOwner from "../components/ProjectOwner/ProjectOwner";

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

  return (
    <div>
      <h2>{projectData.title}</h2>
      <h3>Created at: {projectData.date_created}</h3>
      <h3>
        Created by: <ProjectOwner owner={projectData.owner} />
      </h3>
      <h3>{`Status: ${projectData.is_open}`}</h3>
      <h3>Pledges:</h3>
      <ul>
        {projectData.pledges.map((pledgeData, key) => {
          return (
            <li>
              {pledgeData.amount} from {pledgeData.supporter}
            </li>
          );
        })}
      </ul>
      <Link to="/pledges">Donate</Link>
    </div>
  );
}

export default ProjectPage;
