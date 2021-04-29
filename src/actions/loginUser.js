export function loginUser(user) {
  return (dispatch) => {
    dispatch({ type: "SET_USER", payload: user });
  };
}
