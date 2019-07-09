
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";
import { 
  RECEIVE_FEED, 
  REMOVE_FEED 
} from "../actions/feed_actions";

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
      delete nextState[Object.values(state)[0].id];
      return nextState;
    case RECEIVE_FEED:
      let feeds = nextState[Object.values(state)[0].id].subscribedFeeds  
      
      if(feeds.indexOf(action.feed.id) === -1)
        feeds.push(action.feed.id);
      return nextState;
    case REMOVE_FEED:
      let currentUser = Object.values(state)[0].id;
      let arr = nextState[currentUser].subscribedFeeds; 
      let index = arr.indexOf(action.feed.id)
      arr.splice(index, 1);
      nextState[currentUser].subscribedFeeds = arr;
      return nextState;
    default:
      return state;
  }
};