import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const configureStore = (preloadedState) => createStore(
  RootReducer,
  preloadedState,
  // applyMiddleware(thunk, logger)
  applyMiddleware(thunk)
);
