
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FeedsIndex from "./feeds_index";
import { fetchFeeds } from "../../../actions/feed_actions";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.currentUserId],
  feeds: state.entities.feeds
});

const mapDispatchToProps = dispatch => ({
  fetchFeeds: () => dispatch(fetchFeeds())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedsIndex));
