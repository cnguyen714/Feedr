
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FeedTimeline from "./feed_timeline";
import { fetchArticlesfromFeed } from "../../../actions/article_actions";

const mapStateToProps = (state, ownProps) => ({
  articles: state.entities.articles,
  feeds: state.entities.feeds,
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  fetchArticlesfromFeed: (feed_id) => dispatch(fetchArticlesfromFeed(feed_id)) 
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedTimeline));
