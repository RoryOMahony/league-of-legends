import React from "react";
import { Component } from "react";
import "../index.css";
import HeaderBar from "../headerbar/HeaderBar.jsx";
import NavigationBar from "../navigationbar/NavigationBar.jsx";
import Content from "./Content.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <NavigationBar />
        <Content />
      </div>
    );
  }
}

export default App;
