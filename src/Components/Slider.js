import React, { useState, useEffect } from "react";
import "../scss/slider.scss";
import line from "../pics/line.svg";
import { Link } from "react-router-dom";

function Slider({ data, setNumber }) {
  const [middleNo, setMiddleNo] = useState(1);
  const [firstNo, setFirstNo] = useState(0);
  const [secondNo, setSecondNo] = useState(2);
  const [i, setI] = useState(0);
  const [addStyle, setAddStyle] = useState(false);

  const addMiddleNo = () => {
    setAddStyle(true);
    if (middleNo < 4) {
      setTimeout(() => setMiddleNo(middleNo + 1), 1200);
      setTimeout(() => setI(i + 1), 500);
    } else {
      setTimeout(() => setMiddleNo(1), 1200);
      setTimeout(() => setI(0), 500);
    }
    if (firstNo < 3) {
      setTimeout(() => setFirstNo(firstNo + 1), 1200);
      setTimeout(() => setSecondNo(firstNo), 1200);
    } else {
      setTimeout(() => setFirstNo(0), 1200);
      setTimeout(() => setSecondNo(2), 1200);
    }
  };
  useEffect(() => {
    setTimeout(() => setAddStyle(false), 600);
    setTimeout(() => setNumber(i), 1000);
    console.log(1);
  }, [addStyle, setNumber, i]);
  //   console.log(data);
  return (
    <div className="slider" id={addStyle ? "fillBars" : ""}>
      <div className="bars">
        <div id="bar"></div>
        <div id="bar"></div>
        <div id="bar"></div>
        <div id="bar"></div>
        <div id="bar"></div>
        <div id="bar"></div>
        <div id="bar"></div>
      </div>
      <div id="numbers" style={addStyle ? { display: "none" } : {}}>
        <div id="num">
          <p>
            <span id="topLine">
              <img src={line} alt="line"></img>
            </span>
            0{firstNo}
          </p>
        </div>
        <div id="num">
          <p id="middle" onClick={addMiddleNo}>
            0<span id="mNOs">{middleNo}</span>
          </p>
        </div>
        <div id="num">
          <p>
            0{secondNo}
            <span id="bottomLine">
              <img src={line} alt="line"></img>
            </span>
          </p>
        </div>
      </div>
      <div id="slide">
        <h1>{data[i].title}</h1>
        <Link to={`movie_details/${data[i].id}`}>
          <button>Read More</button>
        </Link>
      </div>
      <div
        className="slides"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w1280${data[i].poster_path}")`
        }}
      ></div>
    </div>
  );
}

export default React.memo(Slider);
