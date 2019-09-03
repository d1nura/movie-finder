import React, { useState } from "react";
import useHttp from "../hooks/http";
import "../scss/upcoming.scss";
import downArrow from "../pics/downarrow.svg";
import { Link } from "react-router-dom";
// import downArrow from "../pics/chevron1.svg";

function UpComing() {
  const [data, loading] = useHttp("movie/upcoming");
  const [tVal, setTVal] = useState(0);
  const [val, setVal] = useState(0);
  const goDown = () => {
    if (tVal < -200) {
      setTVal(0);
      setVal(0);
    } else {
      setTVal(-100 - val);
      setVal(val + 100);
      console.log(tVal);
    }
  };
  // let timer = setInterval(() => {
  //   if (tVal < -200) {
  //     setTVal(0);
  //     setVal(0);
  //     console.log(tVal);
  //   } else {
  //     setTVal(-100 - val);
  //     setVal(val + 100);
  //     console.log(tVal);
  //   }
  // }, 2000);
  // useEffect(() => {}, []);

  const results = () => {
    return (
      <div className="upcoming">
        <div id="upcoming-show">
          {data.results.slice(0, 4).map((item, index) => {
            return (
              <div
                key={index}
                id="u-slide"
                style={{
                  transform: `translateY(${tVal}%)`,
                  backgroundImage: `url("https://image.tmdb.org/t/p/w1280${item.backdrop_path}")`
                }}
              >
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
              <Link to={`/movie_details/${item.id}`} key={index}>
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
