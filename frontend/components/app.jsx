
import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from "./nav_bar/nav_bar_container";

export default () => (
  <div className="frame">
    <Route to="/" component={NavBarContainer} />
  </div>
);