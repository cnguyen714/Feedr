
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SourceTimeline from "./source_timeline";
import { fetchSource } from "../../../actions/source_actions";

const mapStateToProps = (state, ownProps) => ({
  sources: state.entities.sources
});

const mapDispatchToProps = dispatch => ({
  fetchSource: id => dispatch(fetchSource(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SourceTimeline));
