import React from "react";
import "../scss/popular.scss";
import useHttp from "../hooks/http";
import { Link } from "react-router-dom";

function Popular() {
  const [data, loading] = useHttp("movie/popular");

  const results = () => {
    return (
      <div className="popular">
        <div className="pop-slides">
          {data.results.slice(0, 4).map((item, index) => {
            return (
              <div id="pop-slide" key={index}>
                <Link to={`movie_details/${item.id}`}>
                  <div
                    id="pop-img"
                    style={{
                      backgroundImage: `url("https://image.tmdb.org/t/p/w1280${item.backdrop_path}")`
                    }}
                  ></div>
                  <h2>{item.title}</h2>
                </Link>
              </div>
            );
          })}
        </div>
        <div id="pop-rest">
          {data.results.slice(4, data.results.length).map((item, index) => {
            return (
              <div id="pop-cover" key={index}>
                <Link to={`movie_details/${item.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                    alt="movie-pic"
                  ></img>
                  <h2>{item.title}</h2>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  if (data && !loading) {
    return results();
  } else {
    return <p>Loading...</p>;
  }
}

export default React.memo(Popular);
