
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Sidebar from "./sidebar";

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
