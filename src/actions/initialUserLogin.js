import axios from "axios";
export function initialUserLogin() {
  return (dispatch) => {
    return axios({
      method: "post",
      url: "http://localhost:4000/auth/github_oauth2/callback",
      data: {
        code: window.location.href.split("code=")[1],
      },
    }).then((response) => {
      dispatch({
        type: "SET_USER",
        user: Object.assign({}, response.data),
      });
      localStorage.setItem("jwt", response.data.jwt_token);
    });
  };
}
