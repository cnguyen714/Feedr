
import {
  RECEIVE_SOURCE_ERRORS,
  REMOVE_SOURCE_ERRORS
} from "../actions/source_error_actions";

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SOURCE_ERRORS:
      let errors = action.errors.responseJSON;
      return errors;
    case REMOVE_SOURCE_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};