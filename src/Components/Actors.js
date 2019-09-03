import React, { useState } from "react";
import useHttp from "../hooks/http";
import "../scss/actors.scss";
import rightArrow from "../pics/right-arrow.png";
import FullCast from "./FullCast";

function Actors({ match }) {
  const [data, loading] = useHttp(`movie/${match}/credits`);
  const [openCast, setOpenCast] = useState(false);

  const openDiv = () => {
    setOpenCast(true);
  };

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
        <p id="see-all" onClick={openDiv}>
          See all <img src={rightArrow} alt="see more"></img>
        </p>
        <FullCast data={data} openCast={openCast} setOpenCast={setOpenCast} />
      </div>
    );
  };

  if (data && !loading) {
    console.log(data);
    return results();
  } else {
    return <p>Loading Actors...</p>;
  }
}

export default Actors;
