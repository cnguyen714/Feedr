
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FeedsIndex from "./feeds_index";

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedsIndex));
