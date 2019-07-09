
import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";


const Auth = ({ component: Component, path, loggedIn, exact, ...rest }) => (
  <Route {...rest} path={path} exact={exact} render={(props) => {
    return (
      !loggedIn ? (
        <Component {...rest} {...props} />
      ) : (
        // <Redirect to="/" />
        null
      )
    );
  }} />
);

const mapStateToAuthProps = state => {
  return { loggedIn: Boolean(state.session.currentUserId) };
};

export const AuthRoute = withRouter(connect(mapStateToAuthProps, null)(Auth));

const Protected = ({ component: Component, path, loggedIn, exact, ...rest }) => (
  <Route {...rest} path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      // <Redirect to="/" />
      null
    )
  )} />
);

const mapStateToProtectedProps = state => {
  return { loggedIn: Boolean(state.session.currentUserId) };
};

export const ProtectedRoute = withRouter(connect(mapStateToProtectedProps, null)(Protected));
