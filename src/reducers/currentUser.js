export default (
  state = {
    user: {},
    nominated_users: [],
  },
  action
) => {
  switch (action.type) {
    case "SET_USER":
      return Object.assign({}, state, action.payload);
    case "LOGOUT_USER":
      localStorage.removeItem("jwt");
      return (state = action.payload);
    case "ADD_NOMINATED_USER":
      return {
        ...state,
        nominated_users: [...state.nominated_users, action.payload],
      };
    case "REMOVE_NOMINATED_USER":
      return {
        ...state,
        nominated_users: [
          ...state.nominated_users.filter((nom) => nom !== action.payload),
        ],
      };
    default:
      return state;
  }
};
