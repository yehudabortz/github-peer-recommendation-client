export default (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return Object.assign({}, state, action.payload);
    case "LOGOUT_USER":
      return (state = undefined);
    default:
      return state;
  }
};
