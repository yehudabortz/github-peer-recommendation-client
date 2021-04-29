export default (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return Object.assign({}, state, action.payload);
    case "LOGOUT_USER":
      localStorage.removeItem("jwt");
      return (state = action.payload);

    default:
      return state;
  }
};
