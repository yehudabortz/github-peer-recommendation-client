export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_USER_FROM_SEARCH":
      return Object.assign({}, state, action.payload);
    case "UPDATE_USER_FROM_SEARCH":
      debugger;
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
