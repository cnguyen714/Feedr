import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store'
import Root from './components/root'
import { 
  createNewUser,
  logout,
  login 
} from './actions/session_actions';
import {  
  fetchFeeds,
  fetchFeed,
  createFeed,
  updateFeed,
  destroyFeed
} from "./actions/feed_actions";
import Modal from 'react-modal';


document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      errors: {
        session: []
      },
      session: {
        currentUser: window.currentUser
      }
    };
  }
  let store = configureStore(preloadedState);

  // === debug methods start ===
  window.store = store;
  // window.createNewUser = (user) => store.dispatch(createNewUser(user));
  // window.login = (user) => store.dispatch(login(user));
  // window.logout = () => store.dispatch(logout());
  window.fetchFeeds = () => store.dispatch(fetchFeeds());
  window.fetchFeed = (id) => store.dispatch(fetchFeed(id));
  window.createFeed = (feed) => store.dispatch(createFeed(feed));
  window.updateFeed = (feed) => store.dispatch(updateFeed(feed));
  window.destroyFeed = (id) => store.dispatch(destroyFeed(id));

  // === debug methods end   ===

  Modal.setAppElement(root);

  ReactDOM.render(<Root store={store} />, root);
});