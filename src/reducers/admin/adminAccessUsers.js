export default (
  state = {
    users: [],
    page: 0,
    selectedUser: {
      user: {},
      displayCard: "hidden",
    },
  },
  action
) => {
  switch (action.type) {
    case "ADD_ADMIN_ACCESS_USERS":
      return Object.assign({}, { ...state, users: action.payload });
    case "FILTER_ADMIN_ACCESS_USERS_ABC":
      // FILTER BY COLUIMN NAME ABC
      return Object.assign({}, { ...state, users: state.users.filter() });
    case "ADMIN_ACCESS_SET_SELECTED_USER":
      return {
        ...state,
        selectedUser: { ...state.selectedUser, user: action.payload },
      };
    case "ADMIN_ACCESS_SHOW_USER_CARD":
      return {
        ...state,
        selectedUser: { ...state.selectedUser, displayCard: "show" },
      };
    case "ADMIN_ACCESS_HIDE_USER_CARD":
      return {
        ...state,
        selectedUser: { ...state.selectedUser, displayCard: "hidden" },
      };
    case "ADMIN_ACCESS_SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};
