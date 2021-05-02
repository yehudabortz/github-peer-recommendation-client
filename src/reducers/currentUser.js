export default (
  state = {
    user: {},
    nominated_users: [],
  },
  action
) => {
  // debugger;
  switch (action.type) {
    case "SET_USER":
      return Object.assign({}, state, action.payload);
    case "LOGOUT_USER":
      localStorage.removeItem("jwt");
      return (state = action.payload);
    case "ADD_NOMINATED_USER":
      return {
        ...state,
        outbound_nominations: [...state.outbound_nominations, action.payload],
      };
    // return {...state, [...state.outbound_nominations, action.payload] };
    default:
      return state;
  }
};
