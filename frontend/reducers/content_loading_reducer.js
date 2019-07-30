
import {
  RECEIVE_CONTENT_LOADING
} from "../actions/content_loading_actions";

export default (state = true, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CONTENT_LOADING:
      return action.bool;
    default:
      return state;
  }
};