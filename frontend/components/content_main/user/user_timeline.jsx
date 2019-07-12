

import React from "react";
import { AuthRoute, ProtectedRoute } from "../../../util/route_util";
import { Link, Redirect } from "react-router-dom";
import ArticleIndexContainer from "../article_index_container";

class SourceTimeline extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchArticlesforCurrentUser();
  }

  render() {
    if (this.props.loading || this.props.articles === undefined) return null;

    return (
      <div>
        <header>
          <h1>All Feeds</h1>
        </header>

        <ArticleIndexContainer articles={this.props.articles} />
      </div>
    );
  }
}

export default SourceTimeline;