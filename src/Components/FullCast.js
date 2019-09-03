import React, { useState } from "react";
import "../scss/fullCast.scss";
import close from "../pics/close-cross.svg";

function FullCast({ data, openCast, setOpenCast }) {
  const [show, setShow] = useState(false);

  const showCast = () => {
    setShow(false);
  };
  const showCrew = () => {
    setShow(true);
  };
  const closeDiv = () => {
    setOpenCast(false);
  };
  return (
    <div
      className="fullCast"
      style={!openCast ? { transform: "scale(0)" } : {}}
    >
      <div id="crew-btnset">
        <button onClick={showCast} style={!show ? { background: "blue" } : {}}>
          Cast
        </button>
        <button onClick={showCrew} style={show ? { background: "blue" } : {}}>
          Crew
        </button>
        <button onClick={closeDiv} id="close-div-btn">
          <img src={close} alt="close"></img>
        </button>
      </div>
      {/* <div className= */}

      <div id="full-cast" style={!show ? { opacity: 1 } : {}}>
        {data.cast.map((item, index) => {
          return (
            <div id="cast-profile" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w185${item.profile_path}`}
                alt="cast"
              ></img>
              <div>
                <h4>{item.name}</h4>
                <h5>{item.character}</h5>
              </div>
            </div>
          );
        })}
      </div>
      <div id="full-crew" style={!show ? { opacity: 0 } : {}}>
        {data.crew.map((item, index) => {
          return (
            <div id="crew-profile" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w185${item.profile_path}`}
                alt="crew member pic"
              ></img>
              <div>
                <h4>{item.name}</h4>
                <h5>{item.job}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FullCast;
