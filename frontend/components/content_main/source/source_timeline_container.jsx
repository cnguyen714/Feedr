
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SourceTimeline from "./source_timeline";
import { fetchArticlesfromSource } from "../../../actions/article_actions";
import { setContentLoading } from "../../../actions/content_loading_actions";

const mapStateToProps = (state, ownProps) => ({
  articles: state.entities.articles,
  sources: state.entities.sources,
  loading: state.ui.loading,
  contentLoading: state.ui.contentLoading
});

const mapDispatchToProps = dispatch => ({
  fetchArticlesfromSource: (source_id) => dispatch(fetchArticlesfromSource(source_id)),
  setContentLoading: (bool) => dispatch(setContentLoading(bool))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SourceTimeline));
