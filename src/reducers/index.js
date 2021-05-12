import { combineReducers } from "redux";
import currentUser from "./currentUser";
import auth from "./auth";
import userSearchResult from "./userSearchResult";
import errorMessages from "./errorMessages";
import adminAccessUsers from "./admin/adminAccessUsers";

export default combineReducers({
  errorMessages,
  adminAccessUsers,
  currentUser,
  auth,
  userSearchResult,
});
