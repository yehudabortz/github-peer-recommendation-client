export function addUserFromSearch(user) {
  return (dispatch) => {
    dispatch({ type: "ADD_USER_FROM_SEARCH", payload: user });
  };
}

export function updateUserFromSearch(user) {
  return (dispatch) => {
    dispatch({ type: "UPDATE_USER_FROM_SEARCH", payload: user });
  };
}
