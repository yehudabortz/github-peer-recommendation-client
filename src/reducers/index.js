import { combineReducers } from "redux";
import currentUser from "./currentUser";
import auth from "./auth";
import userSearchResult from "./userSearchResult";
import messages from "./messages";
import adminAccessUsers from "./admin/adminAccessUsers";

export default combineReducers({
  messages,
  adminAccessUsers,
  currentUser,
  auth,
  userSearchResult,
});
