
import React from "react";
import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import { Link, Redirect } from "react-router-dom";
import ArticleIndexItem from "./article_index_item";

class SourceTimeline extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    let articles = this.props.articles;
    if (articles === undefined || articles.length === 0) return null;
    return (
      <ul className="timeline">
        
        {/* Redux stores articles as an unodered obj, so we sort here */}
        {Object.values(articles)
          .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
          .map(article => {
            return <ArticleIndexItem 
              key={`article-${article.id}`} 
              article={article} 
              source={this.props.sources[article.source_id]} />
        })}
      </ul>
    );
  }
}

export default SourceTimeline;