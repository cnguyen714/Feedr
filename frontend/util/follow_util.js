
export const createFollow = follow => {
  return $.ajax({
    url: `api/follows`,
    method: `POST`,
    data: {
      follow: follow
    }
  });
};

export const findFollow = ({ feed_id, source_id }) => {
  return $.ajax({
    url: `api/follows/q?feed_id=${feed_id}&source_id=${source_id}`,
    method: `GET`
  });
};

export const destroyFollow = id => {
  return $.ajax({
    url: `api/follows/${id}`,
    method: `DELETE`
  });
};
