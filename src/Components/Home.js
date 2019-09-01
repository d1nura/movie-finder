import React, { useEffect, useState } from "react";
import useHttp from "../hooks/http";
import Slider from "./Slider";
import "../scss/home.scss";
import { Link } from "react-router-dom";

function Home() {
  const [data, loading] = useHttp("trending/movie/day");
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("home");
  }, []);

  const results = () => {
    return (
      <div className="home">
        <Slider data={data.results.slice(0, 4)} setNumber={setNumber} />
        <div
          id="trending-today"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/w1280${data.results[number].poster_path}")`
          }}
        >
          <h1>Trending Today</h1>
        </div>

        <div className="trending">
          {data.results.slice(4, data.results.length).map((item, index) => {
            return (
              <div key={index} id="trending-items">
                <Link to={`/movie_details/${item.id}`}>
                  <img
                    alt="movie-img"
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  />
                  <div id="trending-details">
                    <div id="opacity-screen">
                      <h3>{item.vote_average} / 10</h3>
                    </div>
                  </div>
                  <p>{item.title}</p>{" "}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  if (data && !loading) {
    // console.log(data);

    return results();
  } else {
    return <p>loading..</p>;
  }
}

export default React.memo(Home);
