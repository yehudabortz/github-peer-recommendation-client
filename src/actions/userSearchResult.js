export function addUserFromSearch(user) {
  return (dispatch) => {
    dispatch({ type: "ADD_USER_FROM_SEARCH", payload: user });
  };
}
