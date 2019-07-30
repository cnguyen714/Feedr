
export const RECEIVE_CONTENT_LOADING = "RECEIVE_CONTENT_LOADING";

const receiveContentLoading = (bool) => ({
  type: RECEIVE_CONTENT_LOADING,
  bool
});

export const setContentLoading = (bool) => dispatch => dispatch(receiveContentLoading(bool));
