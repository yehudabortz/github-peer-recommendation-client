import axios from "axios";
import jwt_decode from "jwt-decode";

function fetchCurrentUser(alternateUrl = "") {
  const token = localStorage.getItem("jwt");
  const decoded = jwt_decode(token);
  let url = `${window.endpoint}/users/${decoded["user_id"]}/account`;

  if (alternateUrl !== "") {
    url = alternateUrl;
  }

  let AuthStr = "Bearer ".concat(token);
  return axios.get(url, { headers: { Authorization: AuthStr } });
}

export default fetchCurrentUser;
