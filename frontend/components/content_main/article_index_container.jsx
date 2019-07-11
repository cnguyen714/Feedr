
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ArticleIndex from "./article_index";

const mapStateToProps = (state, ownProps) => ({
  articles: Object.values(ownProps.articles),
  sources: state.entities.sources
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleIndex));
