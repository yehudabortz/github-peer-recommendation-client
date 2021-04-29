import axios from "axios";
import jwt_decode from "jwt-decode";
const token = localStorage.getItem("jwt");
const decoded = jwt_decode(token);

function fetchCurrentUser(
  url = `${window.endpoint}/users/${decoded["user_id"]}/account`,
  jwt_token = token
) {
  const AuthStr = "Bearer ".concat(jwt_token);
  return axios.get(url, { headers: { Authorization: AuthStr } });
}

export default fetchCurrentUser;
