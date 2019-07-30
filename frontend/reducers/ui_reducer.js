import { combineReducers } from "redux";
import loadingReducer from './loading_reducer';
import contentLoadingReducer from './content_loading_reducer';

export default combineReducers({
  loading: loadingReducer,
  contentLoading: contentLoadingReducer
});