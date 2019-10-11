
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
      .then(() => this.getArticles())
      .then(() => this.props.setContentLoading(false))
      .then(() => {
        $(`.select:contains(${this.props.sources[this.props.match.params.sourceId].name})`)[0].classList.add("selected");
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.sourceId !== prevProps.match.params.sourceId) {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      $.ajax()
        .then(() => this.props.setContentLoading(true))
        .then(() => this.getArticles())
        .then(() => this.props.setContentLoading(false));
    }
  }

  getArticles() {
    this.props.fetchArticlesfromSource(this.props.match.params.sourceId, this.state.page);
    this.setState({ page: this.state.page += 1 });
  }


  render() {
    if (this.props.loading || this.props.sources === undefined) return null;
    let sourceId = this.props.match.params.sourceId;
    let source = this.props.sources[sourceId];
    if (source === undefined) return null;
    return (
      <div>
        <header>
          <h1 id="timeline-name">{source.name}</h1>
        </header>

        {this.props.contentLoading
          ? <div>Loading...</div>
          : <ArticleIndexContainer articles={this.props.articles} />}

        <Waypoint onEnter={this.getArticles} />
      </div>
    );
  }
}

export default SourceTimeline;