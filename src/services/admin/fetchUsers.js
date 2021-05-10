import axios from "axios";

function fetchUsers(page = 0, sortFilter = {}, display_count = 10) {
  const token = localStorage.getItem("jwt");
  let url = `${window.endpoint}/users?page=${page}`;
  let condition, filter;

  // MAKE SURE TO CLEAR FILTER ON EACH REQUEST

  const filters = Object.entries(sortFilter);
  for (const [key, value] of filters) {
    if (value !== "default") {
      filter = key;
      condition = value;
    }
  }

  let AuthStr = "Bearer ".concat(token);
  return axios.get(url, {
    headers: { Authorization: AuthStr },
    params: { filter, condition, display_count },
  });
}

export default fetchUsers;