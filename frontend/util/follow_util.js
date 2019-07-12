
export const createFollow = follow => {
  return $.ajax({
    url: `api/follows`,
    method: `POST`,
    data: {
      follow: follow
    }
  });
};

export const destroyFollow = id => {
  return $.ajax({
    url: `api/follows/${id}`,
    method: `DELETE`
  });
};
