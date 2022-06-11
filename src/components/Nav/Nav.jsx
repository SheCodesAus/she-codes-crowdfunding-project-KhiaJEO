import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../Button/Button";
import "./Nav.css";

function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  return (
    <section className="navbar">
      <nav className="left-menu">
        <Link className="button" to="/">
          SEAVA{" "}
        </Link>
        <Link className="button" to="/project/create/">
          Create Project{" "}
        </Link>
        <Link className="button" to="/puns/">
          Puns{" "}
        </Link>
      </nav>
      <nav className="right-menu">
        <Link className="button" to="/login/">
          Login{" "}
        </Link>
      </nav>
    </section>
  );
}

export default Nav;
