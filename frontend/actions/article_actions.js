
import * as ArticleAPIUtil from "../util/article_util";

export const RECEIVE_ARTICLES = "RECEIVE_ARTICLES";
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";
export const CLEAR_ARTICLES = "CLEAR_ARTICLES";

const receiveArticles = articles => ({
  type: RECEIVE_ARTICLES,
  articles
});

const receiveArticle = article => ({
  type: RECEIVE_ARTICLE,
  article
});

const clearArticles = () => ({
  type: CLEAR_ARTICLES,
});

export const fetchArticlesforCurrentUser = (page) => dispatch => ArticleAPIUtil.fetchArticlesforCurrentUser(page)
  .then(feeds => dispatch(receiveArticles(feeds)))

export const fetchArticlesfromFeed = (feed_id, page) => dispatch => ArticleAPIUtil.fetchArticlesfromFeed(feed_id, page)
  .then(feeds => dispatch(receiveArticles(feeds)))

export const fetchArticlesfromSource = (source_id, page) => dispatch => ArticleAPIUtil.fetchArticlesfromSource(source_id, page)
  .then(feeds => dispatch(receiveArticles(feeds)))

export const fetchArticle = (id) => dispatch => ArticleAPIUtil.fetchArticle(id)
  .then(feed => dispatch(receiveArticles(feed)))

export const emptyArticles = () => dispatch => $.ajax()
  .then(() => dispatch(clearArticles()));