
import { 
  createUser,
  createSession, 
  destroySession 
} from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
}); 

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER, 
}); 

export const createNewUser = user => dispatch => createUser(user)
  .then(user => dispatch(receiveCurrentUser(user)));

export const login = user => dispatch => createSession(user)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => destroySession()
  .then(() => dispatch(logoutCurrentUser()));
