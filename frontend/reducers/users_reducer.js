
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";

export default (state = {}, action) => {
  Object.freeze(state);

  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = {
        [action.user.id]: action.user
      };
      return nextState;
    case LOGOUT_CURRENT_USER:
      delete nextState[action.user.id];
      return nextState;
    default:
      return state;
  }
};