
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserTimeline from "./user_timeline";
import { fetchArticlesforCurrentUser } from "../../../actions/article_actions";

const mapStateToProps = (state, ownProps) => ({
  articles: state.entities.articles,
  sources: state.entities.sources,
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  fetchArticlesforCurrentUser: () => dispatch(fetchArticlesforCurrentUser())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserTimeline));
