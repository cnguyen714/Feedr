
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

const removeErrors = () => ({
  type: REMOVE_ERRORS,
});

export const pushErrors = errors => dispatch => dispatch(receiveErrors(errors));
export const dropErrors = () => dispatch => dispatch(removeErrors());
