

import React from "react";
import { AuthRoute, ProtectedRoute } from "../../../util/route_util";
import { Redirect } from "react-router-dom"
import ArticleIndexContainer from "../article_index_container";

class FeedTimeline extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchArticlesfromFeed(this.props.match.params.feedId);
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.feedId !== prevProps.match.params.feedId) {
      this.props.fetchArticlesfromFeed(this.props.match.params.feedId);
    }
  }


  render() {
    if (this.props.loading || this.props.feeds === undefined) { return null; }
    let feedId = this.props.match.params.feedId;
    let feed = this.props.feeds[feedId];
    if (!feed) { return null; }

    return (
      <div>
        <header>
          <h1>{feed.name}</h1>
        </header>

        <ArticleIndexContainer articles={this.props.articles} />
      </div>
    );
  }
}

export default FeedTimeline;