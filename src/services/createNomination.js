import axios from "axios";

function createNomination(user) {
  const token = localStorage.getItem("jwt");
  let url = `${window.endpoint}/nominations`;

  let AuthStr = "Bearer ".concat(token);
  return axios.post(
    url,
    {
      nomination: {
        github_username: user.login,
        avatar: user.avatar_url,
      },
    },
    { headers: { Authorization: AuthStr } }
  );
}

export default createNomination;
