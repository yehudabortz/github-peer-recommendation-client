export default (
  state = {
    isLoggedIn: false,
  },
  action
) => {
  switch (action.type) {
    case "IS_LOGGED_IN":
      return Object.assign({}, state, { isLoggedIn: action.payload });
    default:
      return state;
  }
};
