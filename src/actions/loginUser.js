export function loginUser(user) {
  return (dispatch) => {
    dispatch({ type: "IS_LOGGED_IN", payload: true });
    dispatch({
      type: "SET_USER",
      payload: Object.assign({}, user),
    });
  };
}
