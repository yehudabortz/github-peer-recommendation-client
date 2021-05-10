export default (
  state = {
    users: [],
    pagination: { page: 0, resultsCount: 0, resultsPages: 1, displayCount: 10 },
    filter: { open_to_work: "default" },
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
    case "FILTER_ADMIN_ACCESS_USERS_OPEN_TO_WORK":
      return {
        ...state,
        filter: { ...state.filter, open_to_work: action.payload },
      };
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
        pagination: {
          ...state.pagination,
          page: action.payload,
        },
      };
    case "ADMIN_ACCESS_SET_RESULTS_COUNT":
      return {
        ...state,
        pagination: {
          ...state.pagination,
          resultsCount: action.payload,
          resultsPages: Math.floor(
            action.payload / state.pagination.displayCount
          ),
        },
      };
    default:
      return state;
  }
};
