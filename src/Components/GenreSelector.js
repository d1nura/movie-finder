import React from "react";
import { useHttp } from "../hooks/useHttp";

function GenreSelector(props) {
  let [data, load] = useHttp("genre/movie/list?");

  //console.log(data.results);
  const getGenre = () => {
    //if (data) {
    //console.log(props.id);
    let genArr = [];

    let l = 0;
    let n = 0;
    while (n < data.genres.length) {
      for (let i in data.genres) {
        //console.log(data.genres[0].id === props.id[0]);
        if (data.genres[i].id === props.id[l]) {
          // /console.log(data.genres[i].name, l);
          //setGen([data.genres[i].name]);
          genArr.push(data.genres[i].name);
          l++;
        }
      }

      n++;
    }
    //console.log(genArr);

    let content = (
      <p>
        {genArr.map((i, p) => {
          if (p !== genArr.length - 1) {
            i = i + ", ";
          }
          return i;
        })}
      </p>
    );
    return content;
  };
  let getGenreData =
    data && load === false ? getGenre() : <p>loading genre...</p>;
  return getGenreData;
}

export default GenreSelector;
