import axios from "axios";

export function postGoogleLogin(response) {
  return (dispatch) => {
    const token = response.tokenObj.access_token;
    const idToken = response.tokenObj.id_token;
    return axios({
      method: "POST",
      url: `${window.endpoint}/auth/google_oauth2/callback`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        access_token: `${token}`,
      },
      data: {
        access_token: token,
        id_token: idToken,
      },
    }).then((res) => {
      dispatch({ type: "IS_LOGGED_IN", payload: true });
      dispatch({
        type: "SET_USER",
        payload: Object.assign({}, res.data),
      });
      try {
        localStorage.setItem("jwt", res.data.user.jwt_token);
      } catch {
        console.log("something went wrong");
      }
    });
  };
}
