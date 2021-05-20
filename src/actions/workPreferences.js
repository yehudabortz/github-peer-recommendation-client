import axios from "axios";
export function updateWorkPreference(currentUser, preferenceObj) {
  return (dispatch) => {
    const token = localStorage.getItem("jwt");
    let url = `${window.endpoint}/work_preferences/${currentUser.work_preferences.id}`;

    let AuthStr = "Bearer ".concat(token);
    return (
      axios
        .patch(
          url,
          {
            work_preference: {
              preferenceObj,
            },
          },
          { headers: { Authorization: AuthStr } }
        )
        //   debugger
        .then((res) =>
          dispatch({
            type: "UPDATE_WORK_PREFERENCE",
            payload: res.data.work_preference,
          })
        )
    );
    //   .finally(
    //     (response) => console.log(response)
    //     dispatch({
    //       type: "UPDATE_WORK_PREFERENCE",
    //       payload: response.data.work_preferences,
    //     })
    //   );
  };
}
