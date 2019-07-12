
import merge from 'lodash/merge';

import {
  RECEIVE_ARTICLES,
  RECEIVE_ARTICLE
} from "../actions/article_actions";

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ARTICLES:
      return action.articles;
    case RECEIVE_ARTICLE:
      return merge({}, state, { [action.article.id]: action.article });
    default:
      return state;
  }
};