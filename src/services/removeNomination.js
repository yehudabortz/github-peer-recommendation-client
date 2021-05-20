import axios from "axios";
function removeNomination(user) {
  const token = localStorage.getItem("jwt");
  let url = `${window.endpoint}/nominations/${user.id}`;

  let AuthStr = "Bearer ".concat(token);
  return axios
    .patch(
      url,
      {
        nomination: {
          user_id: user.id,
        },
      },
      { headers: { Authorization: AuthStr } }
    )
    .then((res) => console.log(res.data));
}

export default removeNomination;
