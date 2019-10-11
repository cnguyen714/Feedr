

import React from "react";
import { AuthRoute, ProtectedRoute } from "../../../util/route_util";
import { Redirect } from "react-router-dom"
import ArticleIndexContainer from "../article_index_container";

class FeedTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    }

    this.getArticles = this.getArticles.bind(this);
  }

  componentWillMount() {
    $.ajax()
      .then(() => this.props.setContentLoading(true))
      .then(() => this.getArticles())
      .then(() => this.props.setContentLoading(false))
      // .then(() => {
      //   $(`.select:contains(${this.props.feeds[this.props.match.params.feedId].name})`)[0].classList.add("selected");
      // })
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.feedId !== prevProps.match.params.feedId) {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      $.ajax()
        .then(() => this.props.setContentLoading(true))
        .then(() => this.getArticles())
        .then(() => this.props.setContentLoading(false))
    }
  }

  getArticles() {
    this.props.fetchArticlesfromFeed(this.props.match.params.feedId, this.state.page);
    this.setState({ page: this.state.page += 1 });
  }

  render() {
    if (this.props.loading || this.props.feeds === undefined) { return null; }
    let feedId = this.props.match.params.feedId;
    let feed = this.props.feeds[feedId];
    if (!feed) { return null; }

    return (
      <div>
        <header>
          <h1 id="timeline-name">{feed.name}</h1>
        </header>

        {this.props.contentLoading
          ? <div>Loading...</div>
          : <ArticleIndexContainer articles={this.props.articles} />}

        <button onClick={this.getArticles}>Get Articles</button>
      </div>
    );
  }
}

export default FeedTimeline;