
import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarContainer from "./nav_bar/nav_bar_container";
import Splash from "./splash/splash"

export default () => (
  <div className="frame">
    
    <Route to="/" component={NavBarContainer} />
    <Route exact to="/" component={Splash} />
  </div>
);