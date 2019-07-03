import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store'
import Root from './components/root'
import { 
  createNewUser,
  logout,
  login 
} from './actions/session_actions';
import Modal from 'react-modal';



document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  let store = configureStore();

  // === debug start ===
  // window.createNewUser = createNewUser;
  // window.logout = logout;
  // window.login = login;
  // window.store = store;

  // === debug end   ===

  Modal.setAppElement(root);

  ReactDOM.render(<Root store={store} />, root);
});