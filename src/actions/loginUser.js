import axios from "axios";
export const loginUser = () => {
  return (dispatch) => {
    axios({
      method: "post",
      url: "http://localhost:4000/auth/github_oauth2/callback",
      data: {
        code: window.location.href.split("code=")[1],
      },
    }).then((response) => {
      dispatch({ type: "LOGIN_USER", user: Object.assign({}, response.data) });
    });
  };
};
