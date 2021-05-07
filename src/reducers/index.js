import { combineReducers } from "redux";
import currentUser from "./currentUser";
import auth from "./auth";
import userSearchResult from "./userSearchResult";
import adminAccessUsers from "./admin/adminAccessUsers";

export default combineReducers({
  adminAccessUsers,
  currentUser,
  auth,
  userSearchResult,
});
