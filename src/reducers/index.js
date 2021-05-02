import { combineReducers } from "redux";
import currentUser from "./currentUser";
import auth from "./auth";
import userSearchResult from "./userSearchResult";
import nominatedUsers from "./nominatedUsers";

export default combineReducers({
  currentUser,
  auth,
  userSearchResult,
  nominatedUsers,
});
