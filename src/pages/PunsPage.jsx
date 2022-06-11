import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

// Data

// Components
import PunsForm from "../components/PunsForm/PunsForm";

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
      <div className="punsform-page-wrapper">
        <div id="punsform">
          <PunsForm />
        </div>
      </div>
      <div className="puns-post-wrapper">
        <div className="posted-pun">
          {punsData.map((punsData, key) => {
            return <p key={`puns-${punsData.id}`}>{punsData.post}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default PunsPage;
