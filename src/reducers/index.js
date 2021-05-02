import { combineReducers } from "redux";
import user from "./user";
import auth from "./auth";
import userSearchResult from "./userSearchResult";
import nominatedUsers from "./nominatedUsers";

export default combineReducers({
  user,
  auth,
  userSearchResult,
  nominatedUsers,
});
