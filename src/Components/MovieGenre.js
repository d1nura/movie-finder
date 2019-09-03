import React from "react";
import "../scss/movie-genre.scss";
import useHttp from "../hooks/http";
import BasicMovie from "./BasicMovie";
import BtnNav from "./BtnNav";

function MovieGenre({ match }) {
  // match.params.pageNo = page;
  const [data, loading] = useHttp(
    "discover/movie",
    `with_genres=${match.params.genreId}&page=${match.params.pageNo}`
  );

  const results = () => {
    return (
      <div className="movie-genre">
        <BasicMovie data={data.results}></BasicMovie>
        <BtnNav pageNo={match.params.pageNo} genreId={match.params.genreId} />
      </div>
    );
  };
  if (data && !loading) {
    console.log(data);
    return results();
  } else {
    return <p>loading//.</p>;
  }
}

export default React.memo(MovieGenre);
