import { combineReducers } from "redux";
import currentUser from "./currentUser";
import auth from "./auth";
import userSearchResult from "./userSearchResult";

export default combineReducers({
  currentUser,
  auth,
  userSearchResult,
});
