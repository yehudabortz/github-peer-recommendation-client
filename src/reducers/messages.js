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
    case "REMOVE_ERROR_MESSAGE":
      return {
        ...state,
        messages: state.messages.filter((msg) => msg !== action.payload),
      };
    default:
      return state;
  }
};
