
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FeedsSourceIndex from "./feeds_source_index";
import { fetchSources } from "../../../actions/source_actions";

const mapStateToProps = (state, ownProps) => ({
  feed: ownProps.feed,
  sources: state.entities.sources,
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  fetchSources: () => dispatch(fetchSources())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedsSourceIndex));
