export function addErrorMessage(message) {
  return (dispatch) => {
    dispatch({ type: "ADD_ERROR_MESSAGE", payload: message });
  };
}
