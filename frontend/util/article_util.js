

export const fetchArticlesforCurrentUser = (page) => {
  return $.ajax({
    method: `GET`,
    url: `api/articles`,
    data: { page },
  });
};

export const fetchArticlesfromFeed = (feed_id, page) => {
  return $.ajax({
    method: `GET`,
    url: `api/feeds/${feed_id}/articles`,
    data: { page },
  });
};

export const fetchArticlesfromSource = (source_id, page) => {
  return $.ajax({
    method: `GET`,
    url: `api/sources/${source_id}/articles`,
    data: { page },
  });
};

export const fetchArticle = id => {
  return $.ajax({
    method: `GET`,
    url: `api/articles/${id}`,
  });
};


