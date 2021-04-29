export function logoutUser() {
  return (dispatch) => {
    dispatch({ type: "IS_LOGGED_IN", payload: "Logged Out" });
    dispatch({ type: "LOGOUT_USER", payload: null });
  };
}
