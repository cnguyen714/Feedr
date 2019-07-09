
import merge from 'lodash/merge';

import { 
  RECEIVE_SOURCES,
  RECEIVE_SOURCE,
  REMOVE_SOURCE
} from "../actions/source_actions";

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SOURCES:
      return merge({}, state, action.sources);
    case RECEIVE_SOURCE:
      return merge({}, state, { [action.source.id]: action.source });
    case REMOVE_SOURCE:
      let nextState = merge({}, state);
      delete nextState[action.source.id];
      return nextState;
    default:
      return state;
  }
};