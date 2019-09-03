import React from "react";
import useHttp from "../hooks/http";
import "../scss/similar-movies.scss";
import { Link } from "react-router-dom";

function SimilarMovies({ match }) {
  const [data, loading] = useHttp(`movie/${match}/similar`);
  const results = () => {
    return (
      <div className="similar-movies">
        {data.results.length > 0 ? (
          data.results.slice(0, 5).map((item, index) => {
            //   console.log(item.id);
            return (
              <div id="similar-movie-cover" key={index}>
                <Link to={`/movie_details/${item.id}`}>
                  <img
                    alt="movie-cover"
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  />
                  <p>{item.title}</p>
                </Link>
              </div>
            );
          })
        ) : (
          <p>"No movies found!"</p>
        )}
      </div>
    );
  };

  if (data && !loading) {
    // console.log(data.results.slice(0, 5));
    return results();
  } else {
    return <p>Loading similar...</p>;
  }
}

export default React.memo(SimilarMovies);
