export function addNominatedUser(nominationInfo) {
  return (dispatch) => {
    if (nominationInfo.message) {
      dispatch({
        type: "ADD_ERROR_MESSAGE",
        payload: nominationInfo.message,
      });
    } else {
      dispatch({
        type: "ADD_NOMINATED_USER",
        payload: nominationInfo,
      });
    }
  };
}

export function removeNominatedUser(nominatedUser) {
  return (dispatch) => {
    dispatch({ type: "REMOVE_NOMINATED_USER", payload: nominatedUser });
  };
}
