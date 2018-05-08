import React from "react";
import { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../home/Home.jsx";
import ChampionSelection from "../championselection/ChampionSelection.jsx";

class Content extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/champions" component={ChampionSelection} />
      </div>
    );
  }
}

export default Content;
