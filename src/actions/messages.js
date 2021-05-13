export function addMessage(message) {
  return (dispatch) => {
    dispatch({ type: "ADD_ERROR_MESSAGE", payload: message });
  };
}
