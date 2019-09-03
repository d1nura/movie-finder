import React from "react";
import useHttp from "../hooks/http";
import { Player } from "video-react";
import "../scss/trailer.scss";
import cors from "cors";

function Trailer({ id }) {
  const [data, loading] = useHttp(`movie/${id}/videos`);
  const results = () => {
    return (
      <div className="trailer">
        <Player
          playsInline
          poster="/assets/poster.png"
          src="https://www.youtube.com/watch?v=56mj5OqcqdU"
        />
      </div>
    );
  };
  if (data && !loading) {
    console.log(data);
    return results();
  } else {
    return <p>loading....</p>;
  }
}

export default Trailer;
