export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_USER_FROM_SEARCH":
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
