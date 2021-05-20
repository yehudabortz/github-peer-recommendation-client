const reducer = (
  state = {
    user: {},
    nominated_users: [],
    co_worker_nominated_users: [],
    past_co_worker_nominated_users: [],
    work_preference: {},
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
      if (action.payload.nomination.co_worker === true) {
        return {
          ...state,
          nominated_users: [...state.nominated_users, action.payload.user],
          co_worker_nominated_users: [
            ...state.co_worker_nominated_users,
            action.payload.user,
          ],
        };
      } else if (action.payload.nomination.co_worker === false) {
        return {
          ...state,
          nominated_users: [...state.nominated_users, action.payload.user],
          past_co_worker_nominated_users: [
            ...state.past_co_worker_nominated_users,
            action.payload.user,
          ],
        };
      }
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
        co_worker_nominated_users: [
          ...state.co_worker_nominated_users.filter(
            (nom) => nom !== action.payload
          ),
        ],
        past_co_worker_nominated_users: [
          ...state.past_co_worker_nominated_users.filter(
            (nom) => nom !== action.payload
          ),
        ],
      };
    case "UPDATE_WORK_PREFERENCE":
      return { ...state, work_preference: action.payload };
    // return Object.assign({}, state, {
    //   work_preference: Object.assign({}, state.work_preference, {
    //     [Object.keys(action.payload)[0]]: Object.values(action.payload)[0],
    //   }),
    // });
    default:
      return state;
  }
};

export default reducer;
