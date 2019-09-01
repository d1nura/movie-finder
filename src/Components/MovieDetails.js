import React, { useState } from "react";
import useHttp from "../hooks/http";
import "../scss/movie-details.scss";
import SimilarMovies from "./SimilarMovies";
import Actors from "./Actors";
import Reviews from "./Reviews";

function MovieDetails({ match }) {
  const [data, loading] = useHttp(`movie/${match.params.id}`);
  const [up, setUp] = useState(0);
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
          <div
            id="details-section"
            style={{ transform: `translateY(${up}vh)` }}
          >
            <div id="info">
              <h1>{data.title}</h1>
              <p>{data.overview}</p>
            </div>

            <SimilarMovies match={match.params.id} />
            <Actors match={match.params.id} />
            <Reviews match={match.params.id} />
          </div>

          <section className="sec">
            <div id="sec-group">
              <h3>premier</h3>
              <p>{data.release_date}</p>
            </div>
            <div id="sec-group">
              <h3>Rating</h3>
              <p>{data.vote_average} &nbsp;/&nbsp; 10</p>
            </div>
            <div id="sec-group">
              <h3>Genre</h3>
              {data.genres.map((item, index) => {
                return (
                  <p id="genre-box" key={index}>
                    {item.name}
                  </p>
                );
              })}
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
