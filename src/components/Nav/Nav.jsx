import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFish } from "@fortawesome/free-solid-svg-icons";
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
        <Link className="button" to="/projects/">
          Projects{" "}
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

// return (
//     <>
//       <nav className="nav">
//         <div className="nav-container">
//           <Link to="/" className="nav-logo">
//             SEAVA
//           </Link>
//           <li className="nav-item">
//             <Link to="/puns" className="nav-links">
//               Projects
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/" className="nav-links">
//               Puns
//             </Link>
//           </li>
//           {button && <Button buttonStyle="btn--outline">Login</Button>}
//         </div>
//       </nav>
//     </>
//   );
// }

export default Nav;

// From thinkific/ in class session:
// function Nav() {
//   return (
//     <nav>
//       <Link to="/">HomePage</Link>
//       <Link to="/login">Login</Link>
//     </nav>
//   );
// }

// export default Nav;
