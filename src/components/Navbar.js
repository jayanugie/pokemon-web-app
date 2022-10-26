import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGit, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-dark">
      <div className="container">
        <div>
          <NavLink to="/pokemon-web-app/" className="navbar-brand mb-0 text-white">
            Pokemon Stats
          </NavLink>
          <NavLink to="/pokemon-web-app/pokemon-list" className="navbar-brand mb-0 text-white">
            Pokemon List
          </NavLink>
        </div>
        <div>
          <a
            href="https://github.com/jayanugie"
            target="blank"
            className="btn btn-outline-light btn-floating m-1"
            role="button"
          >
            <FontAwesomeIcon icon={faGit} />
          </a>

          <a
            href="https://www.linkedin.com/in/jayanugie/"
            target="blank"
            className="btn btn-outline-light btn-floating m-1"
            role="button"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://jayanugie.github.io"
            target="blank"
            className="btn btn-outline-light btn-floating m-1"
            role="button"
          >
            <FontAwesomeIcon icon={faPerson} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
