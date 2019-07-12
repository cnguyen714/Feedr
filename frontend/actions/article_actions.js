
import * as ArticleAPIUtil from "../util/article_util";

export const RECEIVE_ARTICLES = "RECEIVE_ARTICLES";
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";

const receiveArticles = articles => ({
  type: RECEIVE_ARTICLES,
  articles
});

const receiveArticle = article => ({
  type: RECEIVE_ARTICLE,
  article
});

export const fetchArticlesforCurrentUser = () => dispatch => ArticleAPIUtil.fetchArticlesforCurrentUser()
  .then(feeds => dispatch(receiveArticles(feeds)))

export const fetchArticlesfromFeed = (feed_id) => dispatch => ArticleAPIUtil.fetchArticlesfromFeed(feed_id)
  .then(feeds => dispatch(receiveArticles(feeds)))

export const fetchArticlesfromSource = (source_id) => dispatch => ArticleAPIUtil.fetchArticlesfromSource(source_id)
  .then(feeds => dispatch(receiveArticles(feeds)))

export const fetchArticle = (id) => dispatch => ArticleAPIUtil.fetchArticle(id)
  .then(feed => dispatch(receiveArticles(feed)))
