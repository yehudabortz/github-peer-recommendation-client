export function loginUser(user) {
  return (dispatch) => {
    dispatch({ type: "IS_LOGGED_IN", payload: "Logged In" });
    dispatch({ type: "SET_USER", payload: user });
  };
}
