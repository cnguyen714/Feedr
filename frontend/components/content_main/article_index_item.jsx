
import React from "react";
import { Link } from "react-router-dom";

export default ({ article, source }) => {
  return (
    <li className="article-item">
      <a href={article.article_url} target="_blank" >
        {article.image_url !== null
          ? <img className="image" src={article.image_url} />
          : <img className="image null-image">
            </img> }
        <div>
          <h2>{article.title}</h2>
          <h3>{`${source.name} / ${Math.floor((new Date().getTime() - new Date(article.published_at).getTime()) / 86400000)}d`}</h3>
          <h3>{article.body}</h3>
        </div>
      </a>  
    </li>
  );
};