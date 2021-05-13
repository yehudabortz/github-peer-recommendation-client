export function addMessage(message) {
  return (dispatch) => {
    dispatch({ type: "ADD_ERROR_MESSAGE", payload: message });
  };
}

export function removeMessage(message) {
  return (dispatch) => {
    dispatch({ type: "REMOVE_ERROR_MESSAGE", payload: message });
  };
}
