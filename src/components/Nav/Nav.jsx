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

  const checkUser = () => {
    const isUserLoggedIn = !!window.localStorage.getItem("token");
    // console.log("isUserLoggedIn", isUserLoggedIn)

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

  // function Nav() {
  //   const [click, setClick] = useState(false);
  //   const [button, setButton] = useState(true);

  //   const handleClick = () => setClick(!click);

  return (
    <section className="navbar">
      <nav className="left-menu">
        <div className="logo">
          <Link className="button" to="/">
            SEAVA{" "}
          </Link>
        </div>
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
        </Link>
      </nav>
    </section>
  );
}

export default Nav;
