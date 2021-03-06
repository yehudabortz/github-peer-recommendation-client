import axios from "axios";

function createNomination(user) {
  const token = localStorage.getItem("jwt");
  let url = `${window.endpoint}/nominations`;

  let AuthStr = "Bearer ".concat(token);

  return axios.post(
    url,
    {
      nomination: {
        linkedin_handle: user.handle,
        co_worker: user.co_worker,
      },
    },
    { headers: { Authorization: AuthStr } }
  );
}

export default createNomination;
