import React, { useState } from "react";
import "../scss/genre-list.scss";
import useHttp from "../hooks/http";
import { Link } from "react-router-dom";
import close from "../pics/close-cross.svg";

function GenreList({ open, setOpen }) {
  const [data, loading] = useHttp("genre/movie/list");
  const [genreTag, setGenreTag] = useState();
  const getGenreName = e => {
    setGenreTag(e.target.innerText);
    // console.log(e.target.innerText);
  };
  const closeGenre = () => {
    setOpen(false);
  };
  const results = () => {
    return (
      <div className="genreList" style={open ? { width: "35vw" } : {}}>
        {data.genres.map((item, index) => {
          return (
            <Link
              onClick={closeGenre}
              key={index}
              to={`/genre/${item.id}/1`}
              onMouseOver={getGenreName}
            >
              {item.name}
            </Link>
          );
        })}
        <div id="genre-name">
          <h1>{genreTag}</h1>
        </div>
        <div id="close-btn">
          <img src={close} alt="close" onClick={closeGenre}></img>
        </div>
        <div id="genre-line"></div>
      </div>
    );
  };
  if (data && !loading) {
    // console.log(data);
    return results();
  } else {
    return <p>Loading genres...</p>;
  }
}

export default React.memo(GenreList);
