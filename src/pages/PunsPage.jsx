import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Data

// Components
import PunsForm from "../components/PunsForm/PunsForm";

function PunsPage() {
  // State
  const [punsData, setPunsData] = useState();

  // Hooks
  const { id } = useParams();

  // Action & Helpers
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}puns/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setPunsData(data);
      });
  }, [id]);

  //   Loading State
  if (!punsData) {
    return <h3>Waiting for puns...</h3>;
  }

  return (
    <div>
      <h2>{punsData.title}</h2>
      <h3>Posted on: {punsData.date_created}</h3>
      <h3>
        {/* Do I need to create a punauthor page? This will be the user who is logged in - or is it just "user" */}
        {/* Created by: <ProjectOwner owner={projectData.owner} /> */}
      </h3>
    </div>
  );
}

export default PunsPage;
