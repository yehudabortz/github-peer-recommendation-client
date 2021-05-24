import axios from "axios";

export function postGoogleLogin(response, invite_token = "") {
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
        invite_token: invite_token,
      },
    }).then((res) => {
      dispatch({
        type: "SET_USER",
        payload: Object.assign({}, res.data),
      });
      dispatch({ type: "IS_LOGGED_IN", payload: true });
      try {
        localStorage.setItem("jwt", res.data.user.jwt_token);
      } catch {
        console.log("something went wrong");
      }
    });
  };
}
