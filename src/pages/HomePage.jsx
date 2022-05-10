import React, { useState, useEffect } from "react";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

// Data
// import { allProjects } from "../data";

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
    <div className="home-wrapper">
      <h1 className="home-welcome"> Welcome to SEAVA </h1>
      <p className="website-detail">
        {" "}
        SEAVA is a crowdfunding site is to create projects that support research
        and work in the marine sciences. Marine ecosystems are highly important
        and without healthy marine life the human race will be no more. A user
        can create a project and profile and they can also pledge hypothetical
        money towards a project that they believe is a good cause. There will
        also be a puns page where a user can post sea and marine related puns
        anonymously to bring light and joy into a topic that can easily become
        existential and overwhelming.{" "}
      </p>

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
    </div>
  );
}

export default HomePage;
