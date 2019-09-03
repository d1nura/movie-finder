import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../scss/navbar.scss";
import GenreList from "./GenreList";

function Navbar() {
  const [open, setOpen] = useState(false);
  const openGenre = () => {
    setOpen(true);
  };
  return (
    <div className="navbar">
      <Link id="nav-a" to="/">
        Home
      </Link>
      <Link id="nav-a" to="/top_rated">
        Top Rated
      </Link>
      <Link id="nav-a" to="/popular">
        popular
      </Link>
      <Link id="nav-a" to="/upcoming">
        Upcoming
      </Link>
      <p id="nav-a" onClick={openGenre}>
        Genre
      </p>
      <GenreList open={open} setOpen={setOpen} />
    </div>
  );
}

export default Navbar;
