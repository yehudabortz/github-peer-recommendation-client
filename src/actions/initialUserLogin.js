import axios from "axios";
export function initialUserLogin() {
  return (dispatch) => {
    let nomination_id;
    let code;
    if (window.location.href.includes("state=")) {
      nomination_id = window.location.href.split("state=")[1];
      code = window.location.href.split("code=")[1].split("state=")[0];
    } else {
      code = window.location.href.split("code=")[1];
    }

    return axios({
      method: "post",
      url: `${window.endpoint}/auth/github_oauth2/callback`,
      data: {
        code: code,
        nomination_id: nomination_id,
      },
    }).then((response) => {
      dispatch({ type: "IS_LOGGED_IN", payload: true });
      dispatch({
        type: "SET_USER",
        payload: Object.assign({}, response.data),
      });
      try {
        localStorage.setItem("jwt", response.data.user.jwt_token);
      } catch {
        console.log("something went wrong");
      }
    });
  };
}
