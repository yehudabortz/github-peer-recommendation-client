export function addNominatedUser(nominatedUser) {
  return (dispatch) => {
    dispatch({ type: "ADD_NOMINATED_USER", payload: nominatedUser });
  };
}

export function removeNominatedUser(nominatedUser) {
  return (dispatch) => {
    dispatch({ type: "REMOVE_NOMINATED_USER", payload: nominatedUser });
  };
}
