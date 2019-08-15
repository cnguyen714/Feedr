
import merge from 'lodash/merge';

import { 
  RECEIVE_FEEDS,
  RECEIVE_FEED,
  REMOVE_FEED
} from "../actions/feed_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_FEEDS:
      return action.feeds;
    case RECEIVE_FEED:
      delete nextState[action.feed.id];
      return merge({}, nextState, { [action.feed.id]: action.feed });
    case REMOVE_FEED:
      delete nextState[action.feed.id];
      return nextState;
    default:
      return state;
  }
};