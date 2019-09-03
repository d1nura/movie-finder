import React, { useState } from "react";
import "../scss/top-rated.scss";
import useHttp from "../hooks/http";
import { Link } from "react-router-dom";
import arrow from "../pics/downarrow.svg";
import heart from "../pics/1.png";

function TopRated() {
  const [data, loading] = useHttp("movie/top_rated");
  const [go, setGo] = useState(-200);
  const goRight = () => {
    go >= -100 ? setGo(go - 100) : setGo(200);
    // setGo(go - 100);
    console.log(go);
  };
  const goLeft = () => {
    go <= 100 ? setGo(go + 100) : setGo(-200);
    // setGo(go + 100);
    console.log(go);
  };
  const results = () => {
    return (
      <div className="topRated">
        <div className="rated-slides">
          {data.results.slice(0, 5).map((item, index) => {
            return (
              <div
                id="rated-slide"
                key={index}
                style={{ transform: `translateX(${go}%)` }}
              >
                <Link to={`movie_details/${item.id}`}>
                  <div
                    id="rated-slide-pic"
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
        <div id="go-left" onClick={goLeft}>
          <img src={arrow} alt="go-left"></img>
        </div>
        <div id="go-right" onClick={goRight}>
          <img src={arrow} alt="go-right"></img>
        </div>
        <div className="rated-covers">
          {data.results.slice(5, data.results.length).map((item, index) => {
            return (
              <div id="rated-cover-pic" key={index}>
                <Link to={`movie_details/${item.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt="movie-pic"
                  ></img>
                  <p>
                    <img src={heart} alt="rating"></img>
                    {item.vote_average}
                  </p>
                  <h3>{item.title}</h3>
                  <h4>{item.release_date.split("-")[0]}</h4>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  if (data && !loading) {
    console.log(data);
    return results();
  } else {
    return <p>Loading..</p>;
  }
}

export default React.memo(TopRated);
