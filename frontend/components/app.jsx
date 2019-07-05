
import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./splash/splash"
import NavBarContainer from "./nav_bar/nav_bar_container";
import SidebarContainer from "./sidebar/sidebar_container";
import ContentMainContainer from './content_main/content_main_container';

export default () => (
  <div className="frame">
    
    <Route to="/" component={SidebarContainer} />
    <Route to="/" component={NavBarContainer} />
    <AuthRoute exact to="/" component={Splash} />
    <ProtectedRoute to="/" component={ContentMainContainer} />
  </div>
);