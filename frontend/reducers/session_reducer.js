
import { 
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";

const _nullSession = {
  currentUserId: null
};

export default (state = _nullSession, action) => {
  Object.freeze(state);

  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger
      nextState = { currentUserId: action.user.id};
      return nextState;
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};