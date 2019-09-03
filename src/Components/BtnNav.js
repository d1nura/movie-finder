import React from "react";
import "../scss/btn-nav.scss";
import left from "../pics/left.png";
import { Link } from "react-router-dom";

function BtnNav({ pageNo, genreId }) {
  return (
    <div className="btnNav">
      <Link to={`/genre/${genreId}/${parseInt(pageNo) - 1}`}>
        <button style={parseInt(pageNo) === 1 ? { transform: "scale(0)" } : {}}>
          <img src={left} alt="go left"></img>
        </button>
      </Link>

      <p>{pageNo}</p>
      <Link to={`/genre/${genreId}/${parseInt(pageNo) + 1}`}>
        <button>
          <img
            src={left}
            style={{ transform: "rotate(180deg)" }}
            alt="go right"
          ></img>
        </button>
      </Link>
    </div>
  );
}

export default BtnNav;
