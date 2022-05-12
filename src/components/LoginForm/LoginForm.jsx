import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  // State
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  //   Hooks
  const navigate = useNavigate();

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then(async (response) => {
        console.log(response.token);
        window.localStorage.setItem("token", response.token);
        navigate("/");
      });
    }
  };
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (credentials.username && credentials.password) {
  //     try {
  //       const response = await fetch(
  //         `${process.env.REACT_APP_API_URL}api-token-auth/`,
  //         {
  //           method: "post",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(credentials),
  //         }
  //       );
  //       const data = await response.json();
  //       window.localStorage.setItem("token", data.token);

  // From Alex's session to store username in local storage to pledge to a project
  // This is not recommended because it will be easy to hack this info
  //    window.localStorage.setItem("username", credentials.username);

  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // };

  return (
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;

// check out ReactForm for more info on forms
// Formiks
// Redox Forms
// Kent C Dodds React Library - epic react dev
