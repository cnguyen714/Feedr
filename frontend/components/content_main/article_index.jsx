
import React from "react";
import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import { Link, Redirect } from "react-router-dom";
import ArticleIndexItem from "./article_index_item";

class SourceTimeline extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    let articles = this.props.articles;
    if (articles === undefined || articles.length === 0) return null;
    return (
      <ul>
        {articles.map(article => {
          return <ArticleIndexItem key={`article-${article.id}`} article={article} />
        })}
      </ul>
    );
  }
}

export default SourceTimeline;