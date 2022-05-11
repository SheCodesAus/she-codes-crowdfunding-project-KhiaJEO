// Please consider that the commented out code is from Alex's online session 03/05/22

import React, { useState } from "react";

// Imports
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./PledgeForm.css";

function PledgeForm({ projectId }) {
  // function PledgeForm({ projectId })
  // this is called object destruction?? Only wanting the project id - the form of the pledges is going to automatically detect the associated project

  //State
  const token = window.localStorage.getItem("token");
  const [pledge, setPledge] = useState({
    amount: "",
    comment: "",
  });

  // // Hooks
  // const { id } = useParams();
  // const navigate = useNavigate();

  // Actions & Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    setPledge((prevPledge) => ({
      // Change pledgeData to prevPledge
      ...prevPledge,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // this will stop the page refreshing^^
    const token = window.localStorage.getItem("token");
    console.log("handleSubmit", pledge, token);
    // is the user logged in and have they filled out the fields - if yes then submit the pledge:
    if (token && pledge.amount && pledge.comment) {
      try {
        //
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}pledges/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
              // Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              project_id: projectId,
              amount: pledge.amount,
              supporter: window.localStorage.getItem("username"),
              comment: pledge.comment,
              anonymous: pledge.anonymous,
              // anonymous: pledge.true
              // I'm not sure exactly what this does and why it is different??
            }),
          }
        );
        const data = await response.json();
        console.log(data);
        // THIS IS HOW YOU NAVIGATE AUTOMATICALLY
        // navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  if (!token) {
    return <Link to="/login">Please login to donate to this project :D</Link>;
  }

  // from Alex's session
  // if (!token) {
  //   return (
  //     <Link to ="/login"> Please login to pledge to this amazing project</Link>
  //   );
  // }

  return (
    <div className="form_wrapper">
      <form>
        <div className="amount-section">
          <label htmlFor="amount">Amount: $</label>
          <input
            type="number"
            id="amount"
            placeholder="Enter Amount"
            onChange={handleChange}
          />
        </div>
        <div className="anonymous-section">
          <label htmlFor="anonymous">Anonymous:</label>
          <select id="anonymous" onChange={handleChange}>
            <option value="">--Please select an option--</option>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>
        <div className="comment-section">
          <label htmlFor="comment">Share a Comment:</label>
          <input
            type="text"
            id="comment"
            placeholder="Comment towards this project"
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Pledge Amount
        </button>
      </form>
    </div>
  );
}

export default PledgeForm;
