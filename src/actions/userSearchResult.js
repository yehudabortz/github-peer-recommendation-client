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

export function updateUserSearchRelationship(co_worker_boolean) {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_USER_SEARCH_RELATIONSHIP",
      payload: co_worker_boolean,
    });
  };
}
