export function addNominatedUser(nominationInfo) {
  return (dispatch) => {
    dispatch({
      type: "ADD_NOMINATED_USER",
      payload: nominationInfo,
    });
  };
}

export function removeNominatedUser(nominatedUser) {
  return (dispatch) => {
    dispatch({ type: "REMOVE_NOMINATED_USER", payload: nominatedUser });
  };
}
