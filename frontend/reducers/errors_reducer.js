
import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
import SourceErrorsReducer from "./source_errors_reducer";

export default combineReducers({
  session: SessionErrorsReducer,
  source: SourceErrorsReducer
})