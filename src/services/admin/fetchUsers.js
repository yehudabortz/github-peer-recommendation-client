import axios from "axios";

function fetchUsers(page = 0) {
  const token = localStorage.getItem("jwt");
  let url = `${window.endpoint}/users?page=${page}`;

  let AuthStr = "Bearer ".concat(token);
  return axios.get(url, {
    headers: { Authorization: AuthStr },
  });
}

export default fetchUsers;
