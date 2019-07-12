
import React from "react";
import { Link } from "react-router-dom";
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../../util/route_util";

import SessionModalContainer from "./session_modal/session_modal_container";

export default ({ currentUser, logout, history} ) => {

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    history.push("/");
  }

  return (
  <header 
    id="nav-bar" 
    className={`nav-bar ${!!currentUser ? "sidebar-offset" : ""}`}>
    
    <nav className="nav-bar-inner clearfix">
      <i className="logo-icon" />

      <ul className="nav-list">
        
        {!!currentUser
          ? <div>{currentUser.username}<button onClick={handleLogout}>Logout</button></div>
          : <SessionModalContainer formType="signup" />
        }
        {!!currentUser
          ? null
          : <SessionModalContainer formType="login" />
        }
        
      </ul>
    </nav>
  </header>
  );
};