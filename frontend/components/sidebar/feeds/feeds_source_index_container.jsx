
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FeedsSourceIndex from "./feeds_source_index";

const mapStateToProps = (state, ownProps) => ({
  feed: ownProps.feed
});

const mapDispatchToProps = dispatch => ({
  // fetch articles
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedsSourceIndex));
