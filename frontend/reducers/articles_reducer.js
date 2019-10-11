
import merge from 'lodash/merge';

import {
  RECEIVE_ARTICLES,
  RECEIVE_ARTICLE,
  CLEAR_ARTICLES
} from "../actions/article_actions";


export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ARTICLES:
      return merge({}, state, action.articles);
    case RECEIVE_ARTICLE:
      return merge({}, state, { [action.article.id]: action.article });
    case CLEAR_ARTICLES:
      return {};
    default:
      return state;
  }
};