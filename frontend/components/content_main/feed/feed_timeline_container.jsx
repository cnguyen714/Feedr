
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FeedTimeline from "./feed_timeline";
import { fetchFeed } from "../../../actions/feed_actions";

const mapStateToProps = (state, ownProps) => ({
  feeds: state.entities.feeds
});

const mapDispatchToProps = dispatch => ({
  fetchFeed: id => dispatch(fetchFeed(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedTimeline));
