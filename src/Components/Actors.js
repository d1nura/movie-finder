import React from "react";
import useHttp from "../hooks/http";
import "../scss/actors.scss";

function Actors({ match }) {
  const [data, loading] = useHttp(`movie/${match}/credits`);
  const results = () => {
    return (
      <div className="actors">
        {data.cast.slice(0, 5).map((item, index) => {
          return (
            <div id="actor-cover" key={index}>
              <img
                alt="actor-pic"
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    );
  };

  if (data && !loading) {
    // console.log(data.cast);
    return results();
  } else {
    return <p>Loading Actors...</p>;
  }
}

export default Actors;
