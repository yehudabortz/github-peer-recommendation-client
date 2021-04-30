import { combineReducers } from "redux";
import user from "./user";
import auth from "./auth";
import userSearchResult from "./userSearchResult";

export default combineReducers({
  user,
  auth,
  userSearchResult,
});
