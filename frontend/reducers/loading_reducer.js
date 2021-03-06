

import {
  RECEIVE_LOADING
} from "../actions/loading_actions";

export default (state = true, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LOADING:
      return action.bool;
    default:
      return state;
  }
};