export function addNominatedUser(nominatedUser) {
  return (dispatch) => {
    dispatch({ type: "ADD_NOMINATED_USER", payload: nominatedUser });
  };
}
