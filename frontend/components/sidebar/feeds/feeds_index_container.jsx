
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FeedsIndex from "./feeds_index";
import { fetchFeeds } from "../../../actions/feed_actions";
import { fetchSources } from "../../../actions/source_actions";
import { setLoading } from "../../../actions/loading_actions";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.currentUserId],
  feeds: state.entities.feeds,
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  fetchFeeds: () => dispatch(fetchFeeds()),
  fetchSources: () => dispatch(fetchSources()),
  setLoading: bool => dispatch(setLoading(bool)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedsIndex));
