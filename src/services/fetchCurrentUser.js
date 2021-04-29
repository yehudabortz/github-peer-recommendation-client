import axios from "axios";

function fetchCurrentUser(url, jwt_token) {
  const AuthStr = "Bearer ".concat(jwt_token);
  return axios.get(url, { headers: { Authorization: AuthStr } });
}

export default fetchCurrentUser;
