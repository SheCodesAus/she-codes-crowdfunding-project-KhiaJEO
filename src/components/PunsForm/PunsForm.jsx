import React, { useState } from "react";

// Imports
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

// Styles
import "./PunsForm.css";

function PunsForm(punsData) {
  // State
  const [puns, postPun] = useState(punsData.map);

  // // Hooks
  const navigate = useNavigate();

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    postPun((prevPuns) => ({
      ...prevPuns,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = window.localStorage.getItem("token");
    console.log("handleSubmit", puns, token);

    // Is user logged in and have they put something in all fields?
    if (token && puns.post && puns.date_posted) {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}puns/`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            post: puns.post,
            date_posted: new Date(puns.date_posted).toISOString(),
          }),
        });
        const data = await response.json();
        console.log(data);

        // THIS IS HOW YOU NAVIGATE AUTOMATICALLY
        navigate(`/puns/${data.id}}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const punsField = [
    {
      id: "post",
      label: "Post",
      placeholder: "Write your pun",
      type: "text",
    },
    {
      id: "date_posted",
      label: "Date posted",
      placeholder: "Date posted",
      type: "date",
    },
  ];

  return (
    <form className="puns-form">
      <h3> Write a sea pun </h3>
      {punsField.map((field, key) => {
        return (
          <div className="row" key={`$key}-$(field.id}`}>
            <label htmlFor={field.id}>{field.label}</label>
            <input
              type={field.type}
              id={field.id}
              placeholder={field.placeholder}
              onChange={handleChange}
            />
          </div>
        );
      })}
      <button className="primary-button" type="submit" onClick={handleSubmit}>
        Post Pun
      </button>
    </form>
  );
}

/* <input
          type="text"
          id="text"
          placeholder="Write Your Pun Here"
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Post Pun
      </button> */

export default PunsForm;
