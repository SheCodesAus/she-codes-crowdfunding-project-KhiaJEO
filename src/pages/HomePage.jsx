import React, { useState, useEffect } from "react";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

// Data
import { allProjects } from "../data";

function HomePage() {
  // States
  const [projectList, setProjectList] = useState([]);

  // Action & Helpers
  // useeffect runs the data into the state to re-render the project list on the homepage.
  // The array [] means it will only run once, but you can values into [] to run again and again
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
  }, []);

  return (
    <div id="project-list">
      {projectList.map((projectData, key) => {
        return (
          <ProjectCard
            key={`project-${projectData.id}`}
            projectData={projectData}
          />
        );
      })}
    </div>
  );
}

export default HomePage;
