import React from "react";
import useHttp from "../hooks/http";
import "../scss/reviews.scss";

function Reviews({ match }) {
  const [data, loading] = useHttp(`movie/${match}/reviews`);
  const results = () => {
    return (
      <div className="reviews">
        {data.results.length > 0 ? (
          data.results.slice(0, 5).map((item, index) => {
            return (
              <div key={index} id="review">
                <h3>{item.author}</h3>
                <p>{item.content}</p>
              </div>
            );
          })
        ) : (
          <p>"No Reviews found!"</p>
        )}
      </div>
    );
  };
  if (data && !loading) {
    console.log(data);
    return results();
  } else {
    return <p>Loading reviews..</p>;
  }
}

export default Reviews;
