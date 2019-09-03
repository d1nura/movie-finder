import React from "react";
import "../scss/basic-movie.scss";
import pop from "../pics/fire.png";
import star from "../pics/star.png";
import { Link } from "react-router-dom";

function BasicMovie({ data }) {
  return (
    <div className="basic-movie">
      {data.map((item, index) => {
        return (
          <div key={index} id="basic-movie-cover">
            <Link to={`/movie_details/${item.id}`}>
              <img
                id="Bmovie-pic"
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt="movie-pic"
              ></img>
              <div id="bTitle">
                <h4>{item.title}</h4>
                <p>{item.release_date.split("-")[0]}</p>
              </div>

              <div id="bRating">
                <p>
                  <img src={pop} alt="popularity"></img>{" "}
                  <h5>{item.popularity.toFixed(2)}</h5>
                </p>
                <p>
                  <img src={star} alt="popularity"></img>{" "}
                  <h5>{item.vote_average}</h5>
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default BasicMovie;
