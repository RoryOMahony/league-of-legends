import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NaviagationBar = () => {
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
        <li className="navigation-item">
          <Link className="navigation-link" to="/items">
            Items
          </Link>
        </li>
        <li className="navigation-item">
          <Link className="navigation-link" to="/championBuilder">
            Champion Builder
          </Link>
        </li>
        <li className="navigation-item">
          <Link className="navigation-link" to="/championComparison">
            Champion Comparison
          </Link>
        </li>
      </ul>
    );
}

export default NaviagationBar;
