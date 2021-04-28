export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return Object.assign(state, action.user);
    default:
      return state;
  }
};
