
import merge from 'lodash/merge';

import { 
  RECEIVE_FEEDS,
  RECEIVE_FEED,
  REMOVE_FEED
} from "../actions/feed_actions";

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FEEDS:
      return action.feeds;
    case RECEIVE_FEED:
      return merge({}, state, { [action.feed.id]: action.feed });
    case REMOVE_FEED:
      let nextState = merge({}, state);
      delete nextState[action.feed.id];
      return nextState;
    default:
      return state;
  }
};