import React from "react";
import { Link } from "react-router-dom";
import "../scss/navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/top_rated">Top Rated</Link>
      <Link to="/popular">popular</Link>
      <Link to="/upcoming">Upcoming</Link>
    </div>
  );
}

export default Navbar;
