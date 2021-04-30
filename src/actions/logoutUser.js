export function logoutUser() {
  return (dispatch) => {
    dispatch({ type: "IS_LOGGED_IN", payload: false });
    dispatch({ type: "LOGOUT_USER", payload: null });
  };
}
