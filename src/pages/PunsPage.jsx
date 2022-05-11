import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

// Data

// Components
import "../components/PunsForm/PunsForm";

function PunsPage() {
  // State
  const [punsData, setPunsData] = useState([]);

  // Hooks
  // const { id } = useParams();

  // Action & Helpers
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}puns/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setPunsData(data);
      });
  }, []);

  //   Loading State
  if (!punsData) {
    return <h3>Waiting for puns...</h3>;
  }

  return (
    <div className="puns-wrapper">
      <h1> Write your own sea pun </h1>
      <div className="puns-post-wrapper">
        {punsData.map((punsData, key) => {
          return <PunsPage key={`puns-${punsData.id}`} punsData={punsData} />;
        })}
        {/* // <h2>{punsData.post}</h2>
        // <h2>Posted on: {punsData.date_posted}</h2> */}
      </div>
    </div>
  );
}

export default PunsPage;

{
  /* Do I need to create a punauthor page? This will be the user who is logged in - or is it just "user" 
Created by: <ProjectOwner owner={projectData.owner} />   */
}
