import React from "react";

function Navbar() {
  return (
    <nav className="navbar bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand mb-0 h1 text-white">
          Pokemon Stats
        </a>
        <a href="/pokemon-list" className="text-white text-decoration-none">
          Pokemon List
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
