
export const RECEIVE_SOURCE_ERRORS = "RECEIVE_SOURCE_ERRORS";
export const REMOVE_SOURCE_ERRORS = "REMOVE_SOURCE_ERRORS";

const receiveErrors = errors => {
  return {
    type: RECEIVE_SOURCE_ERRORS,
    errors
  }
};

const removeErrors = () => ({
  type: REMOVE_SOURCE_ERRORS,
});

export const pushErrors = errors => dispatch => dispatch(receiveErrors(errors));
export const dropErrors = () => dispatch => dispatch(removeErrors());
