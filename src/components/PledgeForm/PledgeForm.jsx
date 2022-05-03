// Please consider that the commented out code is from Alex's online session 03/05/22

import React, { useState } from "react";

// Imports
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// import { Link } from "reacr-router-dom";

function PledgeForm(pledgeData) {
  // function PledgeForm({ projectId })
  // this is called object destruction?? Only wanting the project id - the form of the pledges is going to automatically detect the associated project

  //State
  // const token = window.localStorage.getItem("token")
  const [pledge, postPledge] = useState(pledgeData.map);
  // Change postPlege to setPledge?
  // // Hooks
  const { id } = useParams();
  const navigate = useNavigate();

  // Actions & Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    postPledge((pledgeData) => ({
      // Change pledgeData to prevPledge
      ...pledgeData,
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
              amount: parseInt(pledge.amount),
              comment: pledge.comment,
              // supporter: window.localStorage.getItem("username")
              anonymous: true,
              // anonymous: pledge.anonymous
              // I'm not sure exactly what this does and why it is different??
              project_id: parseInt(id),
            }),
          }
        );
        const data = await response.json();
        console.log(data);
        // THIS IS HOW YOU NAVIGATE AUTOMATICALLY
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  // from Alex's session
  // if (!token) {
  //   return (
  //     <Link to ="/login"> Please login to pledge to this amazing project</Link>
  //   );
  // }

  return (
    <div className="form_wrapper">
      <form>
        <div>
          <label htmlFor="amount">Enter Amount: $</label>
          <input
            type="text"
            id="amount"
            placeholder="Enter Amount"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="comment">Share a Comment:</label>
          <input
            type="text"
            id="comment"
            placeholder="Comment"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="anonymous">Anonymous:</label>
          <select id="anonymous" onChange={handleChange}>
            <option value="">--Please select an option--</option>
            <option value={true}>YES</option>
            <option value={false}>NO</option>
          </select>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Pledge Amount
        </button>
      </form>
    </div>
  );
}

export default PledgeForm;
