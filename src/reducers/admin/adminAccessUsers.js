export default (
  state = {
    users: [],
    selectedUser: {},
  },
  action
) => {
  switch (action.type) {
    case "ADD_ADMIN_ACCESS_USERS":
      return Object.assign({}, { ...state, users: action.payload });
    case "FILTER_ADMIN_ACCESS_USERS_ABC":
      // debugger;
      // FILTER BY COLUIMN NAME ABC
      return Object.assign({}, { ...state, users: state.users.filter() });
    case "ADMIN_ACCESS_SET_SELECTED_USER":
      return Object.assign({}, { ...state, selectedUser: action.payload });
    default:
      return state;
  }
};
