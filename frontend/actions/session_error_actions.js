
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";

const receiveErrors = errors => {
  return {
  type: RECEIVE_SESSION_ERRORS,
  errors
}};

const removeErrors = () => ({
  type: REMOVE_SESSION_ERRORS,
});

export const pushErrors = errors => dispatch => dispatch(receiveErrors(errors));
export const dropErrors = () => dispatch => dispatch(removeErrors());
