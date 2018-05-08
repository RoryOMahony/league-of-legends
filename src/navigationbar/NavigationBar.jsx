import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

class NaviagationBar extends Component {
  render() {
    return (
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link className="navigation-link" to="/">
            Home
          </Link>
        </li>
        <li className="navigation-item">
          <Link className="navigation-link" to="/champions">
            Champions
          </Link>
        </li>
      </ul>
    );
  }
}

export default NaviagationBar;
