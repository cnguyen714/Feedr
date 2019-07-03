
import React from "react";
import { Link } from "react-router-dom";
import LoginModalContainer from "./session_modal/login_modal_container";
import SignupModalContainer from "./session_modal/signup_modal_container";

export default ({ currentUser, logout} ) => (
  <header className="nav-bar">
    <nav className="nav-bar-inner clearfix">
      <i className="nav-logo"></i>

      <ul className="nav-list">
        <SignupModalContainer />
        <LoginModalContainer />
      </ul>
    </nav>
  </header>
);