
import React from "react";
import { Link } from "react-router-dom";
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../../util/route_util";

import SessionModalContainer from "./session_modal/session_modal_container";



export default ({ currentUser, logout} ) => {
  let sidebar = document.getElementById("sidebar");
  let sidebarIsActive = false;

  if(sidebar) {
    sidebarIsActive = sidebar.classList.contains("active")
  }

  return (
  <header 
    id="nav-bar" 
    className={`nav-bar ${sidebarIsActive ? "sidebar-offset" : ""}`}>
    
    <nav className="nav-bar-inner clearfix">
      <i className="logo-icon" />

      <ul className="nav-list">
        <AuthRoute to="/" component={SessionModalContainer} formType="signup" />
        <AuthRoute to="/" component={SessionModalContainer} formType="login" />
        
        {!!currentUser
          ? <div>{currentUser.email}<button onClick={logout}>Logout</button></div>
          : null
        }
      </ul>
    </nav>
  </header>
  );
};