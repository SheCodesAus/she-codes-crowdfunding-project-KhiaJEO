import React, { useState } from "react";

// Imports
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

function PunsForm(punsData) {
  // State
  const [puns, postPun] = useState(punsData.map);

  // // Hooks
  const navigate = useNavigate();

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    postPun((PunsData) => ({
      ...PunsData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = window.localStorage.getItem("token");
    console.log("handleSubmit", puns, token);

    // Is user logged in and have they put something in all fields?
    if (token && puns.text && puns.user) {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}puns/`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            text: puns.text,
            anonymous: true,
          }),
        });
        const data = await response.json();
        console.log(data);
        navigate(`/puns/}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <form>
      <div className="puns-textbox">
        <input
          type="text"
          id="text"
          placeholder="Write Your Pun Here"
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Post Pun
      </button>
    </form>
  );
}

export default PunsForm;
