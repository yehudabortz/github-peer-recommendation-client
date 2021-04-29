export default (
  state = {
    isLoggedIn: "Logged Out",
  },
  action
) => {
  switch (action.type) {
    case "IS_LOGGED_IN":
      //   return Object.assign({}, state, action.payload);
      return Object.assign({}, state, { isLoggedIn: action.payload });
    default:
      return state;
  }
};
