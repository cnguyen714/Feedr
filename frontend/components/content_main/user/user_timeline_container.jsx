
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserTimeline from "./user_timeline";
import { fetchArticlesforCurrentUser, emptyArticles } from "../../../actions/article_actions";
import { setContentLoading } from "../../../actions/content_loading_actions";

const mapStateToProps = (state, ownProps) => ({
  articles: state.entities.articles,
  sources: state.entities.sources,
  loading: state.ui.loading,
  contentLoading: state.ui.contentLoading
});

const mapDispatchToProps = dispatch => ({
  fetchArticlesforCurrentUser: (page) => dispatch(fetchArticlesforCurrentUser(page)),
  setContentLoading: (bool) => dispatch(setContentLoading(bool)),
  emptyArticles: () => dispatch(emptyArticles()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserTimeline));
