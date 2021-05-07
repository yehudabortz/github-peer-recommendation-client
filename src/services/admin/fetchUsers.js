import axios from "axios";

function fetchUsers() {
  const token = localStorage.getItem("jwt");
  let url = `${window.endpoint}/users`;

  let AuthStr = "Bearer ".concat(token);
  return axios.get(url, { headers: { Authorization: AuthStr } });
}

export default fetchUsers;
