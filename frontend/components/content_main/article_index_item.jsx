
import React from "react";
import { Link } from "react-router-dom";

export default ({ article, source }) => {
  return (
    <li className="article-item">
      <Link to={`/articles/${article.id}`}>
        <img src={article.image_url} />
        <div>
          <h2>{article.title}</h2>
          <h3>{`${source.name} / ${Math.floor((new Date().getTime() - new Date(article.published_at).getTime()) / 86400000)}d`}</h3>
          <h3>{article.body}</h3>
        </div>
      </Link>
    </li>
  );
};