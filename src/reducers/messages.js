export default (
  state = {
    messages: [],
  },
  action
) => {
  switch (action.type) {
    case "ADD_ERROR_MESSAGE":
      // debugger;
      return { ...state, messages: [...state.messages, action.payload] };
    case "CLEAR_ERROR_MESSAGES":
      debugger;
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};
