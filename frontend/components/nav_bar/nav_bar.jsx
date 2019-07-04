
import React from "react";
import { Link } from "react-router-dom";
import SessionModalContainer from "./session_modal/session_modal_container";

export default ({ currentUser, logout} ) => (
  <header className="nav-bar">
    <nav className="nav-bar-inner clearfix">
      <i className="logo-icon" />

      <ul className="nav-list">
        <SessionModalContainer formType="signup" />
        <SessionModalContainer formType="login" />
      </ul>
    </nav>
  </header>
);