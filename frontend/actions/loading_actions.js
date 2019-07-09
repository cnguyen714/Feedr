
export const RECEIVE_LOADING = "RECEIVE_LOADING";

const receiveLoading = (bool) => ({
  type: RECEIVE_LOADING,
  bool
});

export const setLoading = (bool) => dispatch => dispatch(receiveLoading(bool));
