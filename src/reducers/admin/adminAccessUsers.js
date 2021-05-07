export default (
  state = {
    users: [],
  },
  action
) => {
  switch (action.type) {
    case "ADD_ADMIN_ACCESS_USERS":
      //   debugger;
      return Object.assign({}, { ...state, users: action.payload });
    default:
      return state;
  }
};
