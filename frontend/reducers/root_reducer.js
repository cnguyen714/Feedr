import { combineReducers } from "redux";
import EntitiesReducer from "./entities_reducer";
import SessionReducer from "./session_reducer";

export default combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer
})