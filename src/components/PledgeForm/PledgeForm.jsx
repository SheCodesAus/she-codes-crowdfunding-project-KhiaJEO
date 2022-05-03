import React, { useState } from "react";

// Imports
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function PledgeForm(pledgeData) {
  //State
  const [pledge, postPledge] = useState(pledgeData.map);
  // // Hooks
  const { id } = useParams();
  const navigate = useNavigate();

  // Actions & Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    postPledge((pledgeData) => ({
      ...pledgeData,
      [id]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = window.localStorage.getItem("token");
    console.log("handleSubmit", pledge, token);
    // is the user logged in and have they filled out the fields - if yes then submit the pledge:
    if (token && pledge.amount && pledge.comment) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}pledges/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              amount: parseInt(pledge.amount),
              comment: pledge.comment,
              anonymous: true,
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
  return (
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
      <button type="submit" onClick={handleSubmit}>
        Pledge Amount
      </button>
    </form>
  );
}

export default PledgeForm;
