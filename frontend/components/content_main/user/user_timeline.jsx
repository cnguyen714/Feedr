

import React from "react";
import { AuthRoute, ProtectedRoute } from "../../../util/route_util";
import { Link, Redirect } from "react-router-dom";
import ArticleIndexContainer from "../article_index_container";

class SourceTimeline extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    $.ajax()
      .then(() => this.props.setContentLoading(true))
      .then(() => this.props.fetchArticlesforCurrentUser())
      .then(() => this.props.setContentLoading(false))

    
  }

  render() {
    if (this.props.loading || this.props.articles === undefined) return null;

    return (
      <div>
        <header>
          <h1>All Feeds</h1>
        </header>

        {this.props.contentLoading
          ? <div>Loading...</div>
          : <ArticleIndexContainer articles={this.props.articles} />}
      </div>
    );
  }
}

export default SourceTimeline;