
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SourceForm from "./source_form";
import { createFeed } from "../../../actions/feed_actions";
import { createSource } from "../../../actions/source_actions";

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
  createFeed: feed => dispatch(createFeed(feed)),
  createSource: source => dispatch(createSource(source))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SourceForm));
