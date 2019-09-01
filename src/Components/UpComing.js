import React, { useState, useCallback, useEffect } from "react";
import useHttp from "../hooks/http";
import "../scss/upcoming.scss";
import downArrow from "../pics/downarrow.svg";
import { Link } from "react-router-dom";

function UpComing() {
  const [data, loading] = useHttp("movie/upcoming");
  const [tVal, setTVal] = useState(0);
  const [val, setVal] = useState(0);
  const goDown = useCallback(() => {
    if (tVal < -200) {
      setTVal(0);
      setVal(0);
    } else {
      setTVal(-100 - val);
      setVal(val + 100);
      console.log(tVal);
    }
  }, [tVal, val]);

  useEffect(() => {}, []);
  const results = () => {
    return (
      <div className="upcoming">
        <div id="upcoming-show">
          {data.results.slice(0, 4).map((item, index) => {
            return (
              <div
                key={index}
                id="u-slide"
                style={{ transform: `translateY(${tVal}%)` }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`}
                  alt="movie-pic"
                ></img>
                <Link to={`/movie_details/${item.id}`}>
                  <h1>{item.title}</h1>
                </Link>
                <p>{item.overview}</p>
              </div>
            );
          })}
        </div>
        <div id="down-arrow" onClick={goDown}>
          <img src={downArrow} alt="down-arrow"></img>
        </div>
        <div id="upcoming-covers">
          {data.results.slice(4, data.results.length).map((item, index) => {
            return (
              <Link to={`/movie_details/${item.id}`}>
                <img
                  key={index}
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt="movie-pic"
                ></img>
              </Link>
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
    return <p>Loading...</p>;
  }
}

export default React.memo(UpComing);
