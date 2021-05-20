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
    // dispatch({
    //   type: "ADD_ERROR_MESSAGE",
    //   payload: res.data.message,
    // });
    //   .finally(
    //     (response) => console.log(response)
    //     dispatch({
    //       type: "UPDATE_WORK_PREFERENCE",
    //       payload: response.data.work_preference,
    //     })
    //   );
  };
}
