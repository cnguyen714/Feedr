
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FeedTimeline from "./feed_timeline";
import { fetchArticlesfromFeed } from "../../../actions/article_actions";
import { setContentLoading } from "../../../actions/content_loading_actions";

const mapStateToProps = (state, ownProps) => ({
  articles: state.entities.articles,
  feeds: state.entities.feeds,
  loading: state.ui.loading,
  contentLoading: state.ui.contentLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchArticlesfromFeed: (feed_id) => dispatch(fetchArticlesfromFeed(feed_id)),
  setContentLoading: (bool) => dispatch(setContentLoading(bool))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedTimeline));
