
export const fetchFeeds = () => {
  return $.ajax({
    url: `api/feeds`,
    method: `GET`
  });
};

export const fetchFeed = id => {
  return $.ajax({
    url: `api/feeds/${id}`,
    method: `GET`
  });
};

export const createFeed = feed => {
  return $.ajax({
    url: `api/feeds`,
    method: `POST`,
    data: {
      feed: feed
    }
  });
};

export const updateFeed = feed => {
  return $.ajax({
    url: `api/feeds/${feed.id}`,
    method: `PATCH`,
    data: {
      feed: feed
    }
  });
};

export const destroyFeed = id => {
  return $.ajax({
    url: `api/feeds/${id}`,
    method: `DELETE`
  });
};

