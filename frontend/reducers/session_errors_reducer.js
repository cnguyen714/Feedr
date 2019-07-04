
import {
  RECEIVE_ERRORS,
  REMOVE_ERRORS
} from "../actions/session_error_actions";

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      debugger
      let errors = action.errors.responseJSON;
      return errors;
    case REMOVE_ERRORS:
      return _nullerrors;
    default:
      return state;
  }
};