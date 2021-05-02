export default (state = [], action) => {
  switch (action.type) {
    case "ADD_NOMINATED_USER":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
