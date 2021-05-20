const reducer = (state = { handle: "", co_worker: true }, action) => {
  switch (action.type) {
    case "ADD_USER_FROM_SEARCH":
      return Object.assign({}, state, { handle: action.payload });
    case "UPDATE_USER_FROM_SEARCH":
      return Object.assign({}, state, action.payload);
    case "UPDATE_USER_SEARCH_RELATIONSHIP":
      return { ...state, co_worker: action.payload };
    default:
      return state;
  }
};

export default reducer;
