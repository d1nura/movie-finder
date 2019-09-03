import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import TopRated from "./Components/TopRated";
import MovieDetails from "./Components/MovieDetails";
import UpComing from "./Components/UpComing";
import Popular from "./Components/Popular";
import MovieGenre from "./Components/MovieGenre";
import Person from "./Components/Person";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/top_rated" component={TopRated}></Route>
          <Route path="/movie_details/:id" component={MovieDetails}></Route>
          <Route path="/upcoming" component={UpComing}></Route>
          <Route path="/popular" component={Popular}></Route>
          <Route path="/genre/:genreId/:pageNo" component={MovieGenre}></Route>
          <Route path="/person/:personId" component={Person}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
