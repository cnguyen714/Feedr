
import React from "react";
import { AuthRoute, ProtectedRoute } from "../../../util/route_util";
import { Link, Redirect } from "react-router-dom";
import ArticleIndexContainer from "../article_index_container";

class SourceTimeline extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchArticlesfromSource(this.props.match.params.sourceId);
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.sourceId === prevProps.match.params.sourceId) {
      this.props.fetchArticlesfromSource(this.props.match.params.sourceId);
    }
  }

  render() {
    if (this.props.loading || this.props.sources === undefined) return null;
    let sourceId = this.props.match.params.sourceId;
    let source = this.props.sources[sourceId];
    if (source === undefined) return null;
    return (
      <div>
        <header>
          <h1>{source.name}</h1>
        </header>

        <ArticleIndexContainer articles={this.props.articles} />
      </div>
    );
  }
}

export default SourceTimeline;