import axios from "axios";

function fetchUsers(page = 0, filter, display_count = 10) {
  const token = localStorage.getItem("jwt");
  let url = `${window.endpoint}/search/users`;

  // MAKE SURE TO CLEAR FILTER ON EACH REQUEST
  return axios({
    method: "POST",
    url: url,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      access_token: `${token}`,
    },
    data: {
      search: { page: page, display_count: display_count, filter: filter },
    },
  });
}

export default fetchUsers;
