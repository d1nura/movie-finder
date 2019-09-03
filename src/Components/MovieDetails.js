import React, { useState } from "react";
import useHttp from "../hooks/http";
import "../scss/movie-details.scss";
import SimilarMovies from "./SimilarMovies";
import Actors from "./Actors";
import Reviews from "./Reviews";
import { Link } from "react-router-dom";
import star from "../pics/white-star.png";
import time from "../pics/time.png";
import calender from "../pics/calender.png";

function MovieDetails({ match }) {
  const [data, loading] = useHttp(`movie/${match.params.id}`);
  const [up, setUp] = useState(0);
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  console.log("movie-details");
  const getInfo = () => {
    setUp(0);
  };
  const getSimilarMovies = () => {
    setUp(-100);
  };
  const getActors = () => {
    setUp(-200);
  };
  const getReviews = () => {
    setUp(-300);
  };
  const results = () => {
    return (
      <div className="movie-details">
        <div
          id="details-coverPic"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/w1280${data.backdrop_path}")`
          }}
        ></div>
        <div id="details-cover">
          <div id="details-opacity-cover"></div>
          <div
            id="details-section"
            style={{ transform: `translateY(${up}vh)` }}
          >
            <div id="info">
              <h1>{data.title}</h1>
              <p id="p-overview">{data.overview}</p>
            </div>

            <SimilarMovies match={match.params.id} />
            <Actors match={match.params.id} />
            <Reviews match={match.params.id} />
          </div>

          <section className="sec">
            <div id="sec-group">
              <h3>
                <span>p</span>remier
              </h3>
              <p>
                <img src={calender} alt="calender"></img>
                {months[parseInt(data.release_date.split("-")[1]) - 1]} &nbsp;
                {data.release_date.split("-")[2]},&nbsp;
                {data.release_date.split("-")[0]}
              </p>
            </div>
            <div id="sec-group">
              <h3>
                <span>R</span>ating
              </h3>
              <p>
                <img src={star} alt="rating"></img> {data.vote_average}
                &nbsp;/&nbsp; 10
              </p>
            </div>
            <div id="sec-group">
              <h3>
                <span>R</span>untime
              </h3>
              <p>
                <img src={time} alt="timer"></img>
                {data.runtime} min
              </p>
            </div>
            <div id="sec-group">
              <h3>
                <span>G</span>enre
              </h3>
              <div className="genre-flex">
                {data.genres.map((item, index) => {
                  return (
                    <Link to={`/genre/${item.id}/1`} id="genre-box" key={index}>
                      <p id="aP">{item.name}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        <div className="other-movie-details">
          <div
            id="other"
            onClick={getInfo}
            className={up === 0 ? "shine-sec" : ""}
          >
            <div id="dot"></div>
            <h4>info</h4>
          </div>
          <div
            id="other"
            onClick={getSimilarMovies}
            className={up === -100 ? "shine-sec" : ""}
          >
            <div id="dot"></div>
            <h4>similar movies</h4>
          </div>
          <div
            id="other"
            onClick={getActors}
            className={up === -200 ? "shine-sec" : ""}
          >
            <div id="dot"></div>
            <h4>actors</h4>
          </div>
          <div
            id="other"
            onClick={getReviews}
            className={up === -300 ? "shine-sec" : ""}
          >
            <div id="dot"></div>
            <h4>reviews</h4>
          </div>
        </div>
      </div>
    );
  };

  if (data && !loading) {
    console.log(data);
    return results();
  } else {
    return <p>Loading...</p>;
  }
}

export default MovieDetails;
