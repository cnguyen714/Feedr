
import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./splash/splash"
import NavBarContainer from "./nav_bar/nav_bar_container";
import SidebarContainer from "./sidebar/sidebar_container";
import ContentMainContainer from './content_main/content_main_container';

export default () => (
  <div className="frame">
    
    <Route path="/" component={SidebarContainer} />
    <Route path="/" component={NavBarContainer} />
    {/* <AuthRoute exact path="/" component={Splash} /> */}
    <ProtectedRoute path="/" component={ContentMainContainer} />
  </div>
);