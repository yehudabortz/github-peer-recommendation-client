import axios from "axios";
export function initialUserLogin() {
  return (dispatch) => {
    return axios({
      method: "post",
      url: `${window.endpoint}/auth/github_oauth2/callback`,
      data: {
        code: window.location.href.split("code=")[1],
      },
    }).then((response) => {
      dispatch({ type: "IS_LOGGED_IN", payload: true });
      dispatch({
        type: "SET_USER",
        payload: Object.assign({}, response.data),
      });
      localStorage.setItem("jwt", response.data.user.jwt_token);
    });
  };
}
