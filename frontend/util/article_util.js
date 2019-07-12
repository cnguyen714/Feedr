

export const fetchArticlesforCurrentUser = () => {
  return $.ajax({
    url: `api/articles`,
    method: `GET`
  });
};

export const fetchArticlesfromFeed = (feed_id) => {
  return $.ajax({
    url: `api/feeds/${feed_id}/articles`,
    method: `GET`
  });
};

export const fetchArticlesfromSource = (source_id) => {
  return $.ajax({
    url: `api/sources/${source_id}/articles`,
    method: `GET`
  });
};

export const fetchArticle = id => {
  return $.ajax({
    url: `api/articles/${id}`,
    method: `GET`
  });
};


