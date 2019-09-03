import React from "react";
import useHttp from "../hooks/http";

function Person({ match }) {
  const [data, loading] = useHttp(`person/${match.params.personId}`);
  const results = () => {
    return <div className="actor"></div>;
  };
  if (data && !loading) {
    console.log(data);
    return results();
  } else {
    return <p>Loading...</p>;
  }
}

export default Person;
