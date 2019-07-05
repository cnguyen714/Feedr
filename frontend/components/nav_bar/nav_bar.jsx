
import React from "react";
import { Link } from "react-router-dom";
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../../util/route_util";

import SessionModalContainer from "./session_modal/session_modal_container";



export default ({ currentUser, logout} ) => (


  <header className="nav-bar">
    <nav className="nav-bar-inner clearfix">
      <i className="logo-icon" />

      <ul className="nav-list">
        <AuthRoute to="/" component={SessionModalContainer} formType="signup" />
        <AuthRoute to="/" component={SessionModalContainer} formType="login" />
        
        {!!currentUser
          ? <button onClick={logout}>Logout</button>
          : null
        }

      </ul>
    </nav>
  </header>
);