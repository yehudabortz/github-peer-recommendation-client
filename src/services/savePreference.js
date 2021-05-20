import axios from "axios";
function savePreference(currentUser, preferenceObj) {
  const token = localStorage.getItem("jwt");
  let url = `${window.endpoint}/work_preferences/${currentUser.work_preferences.id}`;

  let AuthStr = "Bearer ".concat(token);
  // debugger;
  return axios.patch(
    url,
    {
      work_preference: {
        preferenceObj,
      },
    },
    { headers: { Authorization: AuthStr } }
  );
}

export default savePreference;
