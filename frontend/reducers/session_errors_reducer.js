
import {
  RECEIVE_SESSION_ERRORS,
  REMOVE_SESSION_ERRORS
} from "../actions/session_error_actions";

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      let errors = action.errors.responseJSON;
      return errors;
    case REMOVE_SESSION_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};