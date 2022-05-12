import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Data
// import { oneProject } from "../data";

// Components
import UserDetail from "../components/UserDetail/UserDetail";

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
        Created by: <UserDetail userId={projectData.owner} />
      </h3>
      <h3>{`Status: ${projectData.is_open}`}</h3>
      <h3>Pledges:</h3>
      <ul>
        {projectData.pledges.map((pledgeData, key) => {
          return (
            <li>
              {pledgeData.amount} from{" "}
              <UserDetail userId={pledgeData.supporter} />
            </li>
          );
        })}
      </ul>
      <Link to={`/pledges/${id}`}>Donate</Link>
      <h3>Donations:</h3>

      {/* <PledgeForm projectId={id} />*/}
      {/* This is referring to the pledge form project id to ensure that it will show on the project page */}
    </div>
  );
}

export default ProjectPage;
