

import React from "react";
import { AuthRoute, ProtectedRoute } from "../../../util/route_util";
import { Link, Redirect } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import ArticleIndexContainer from "../article_index_container";

class SourceTimeline extends React.Component {
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
      .then(() => this.props.emptyArticles())
      .then(() => this.setState({ page: 1 }))
      .then(() => this.getArticles())
      .then(() => this.props.setContentLoading(false))
      .then(() => {
        $(`.select:contains('All Feeds')`).addClass("selected");
      })
  }

  getArticles() {
    this.props.fetchArticlesforCurrentUser(this.state.page)
    this.setState({ page: this.state.page += 1 });
  }

  _renderWaypoint() {
    if (!this.props.contentLoading) {
      return (
        <Waypoint
          onEnter={this.getArticles} />
      )
    }
  }


  render() {
    if (this.props.loading || this.props.articles === undefined) return null;

    return (
      <div>
        <header>
          <h1 id="timeline-name">All Feeds</h1>
        </header>

        {this.props.contentLoading
          ? <div>Loading...</div>
          : <ArticleIndexContainer articles={this.props.articles} />}

        {this._renderWaypoint()}
      </div>
    );
  }
}

export default SourceTimeline;