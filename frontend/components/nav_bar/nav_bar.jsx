
import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout} ) => (
  <header className="nav-bar">
    <nav className="nav-bar-inner clearfix">
      <i className="nav-logo"></i>

      <ul className="nav-list">
        <button>Log In</button>
      </ul>
    </nav>
  </header>
);