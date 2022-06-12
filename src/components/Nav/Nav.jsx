import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Nav.css";

function Nav() {
  // Hooks
  const navigate = useNavigate();

  // Actions and Helpers
  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleSignOut = () => {
    window.localStorage.removeItem("token");
    navigateToLogin();
  };
  // Check user for log in and log out

  const checkUser = () => {
    const isUserLoggedIn = !!window.localStorage.getItem("token");
    console.log("isUserLoggedIn", isUserLoggedIn);

    return isUserLoggedIn ? (
      <a href="logout" onClick={handleSignOut} className="button">
        Log out
      </a>
    ) : (
      <a href="login" onClick={navigateToLogin} className="button">
        Log in
      </a>
    );
  };

  return (
    <section className="navbar">
      <nav className="left-menu">
        <Link className="button" to="/">
          SEAVA{" "}
        </Link>

        <Link className="button" to="/projects/create/">
          Create Project{" "}
        </Link>
        <Link className="button" to="/puns/">
          Puns{" "}
        </Link>
      </nav>
      <nav className="right-menu">
        <Link className="button" to="/login/">
          {checkUser()}
          {/* this is for the login and log out */}
        </Link>
      </nav>
    </section>
  );
}

export default Nav;
