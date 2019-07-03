
export const createUser = user => (
  $.ajax({
    url: `api/users`,
    method: 'POST',
    data: {
      user: user
    }
  })
);

export const createSession = user => (
  $.ajax({
    url: `api/session`,
    method: 'POST',
    data: {
      user: user
    }
  })
);

export const destroySession = () => (
  $.ajax({
    url: `api/session`,
    method: 'DELETE'
  })
);

