
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ContentMain from "./content_main";

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContentMain));
