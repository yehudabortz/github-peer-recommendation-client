import axios from "axios";

export function updateWorkPreference(user, preferenceObj) {
  return (dispatch) => {
    const token = localStorage.getItem("jwt");
    let url = `${window.endpoint}/work_preferences/${user.work_preference.id}`;
    let AuthStr = "Bearer ".concat(token);
    return axios
      .patch(
        url,
        {
          work_preference: {
            id: user.work_preference.id,
            preferenceObj,
          },
        },
        { headers: { Authorization: AuthStr } }
      )
      .then((res) =>
        dispatch({
          type: "UPDATE_WORK_PREFERENCE",
          payload: res.data.work_preference,
        })
      );
  };
}

export function updateSelectedUserWorkPreference(user, preferenceObj) {
  return (dispatch) => {
    const token = localStorage.getItem("jwt");
    let url = `${window.endpoint}/work_preferences/${user.work_preference.id}`;
    let AuthStr = "Bearer ".concat(token);
    return axios
      .patch(
        url,
        {
          work_preference: {
            id: user.work_preference.id,
            preferenceObj,
          },
        },
        { headers: { Authorization: AuthStr } }
      )
      .then((res) =>
        dispatch({
          type: "UPDATE_SELECTED_USER_WORK_PREFERENCE",
          payload: res.data.work_preference,
        })
      );
  };
}
