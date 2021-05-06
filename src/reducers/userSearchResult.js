export default (state = { handle: "" }, action) => {
  switch (action.type) {
    case "ADD_USER_FROM_SEARCH":
      return Object.assign({}, state, { handle: action.payload });
    // return Object.assign({}, state.handle, action.payload);
    case "UPDATE_USER_FROM_SEARCH":
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
