export function filterOpenToWork(filter) {
  return (dispatch) => {
    dispatch({
      type: "FILTER_ADMIN_ACCESS_USERS_OPEN_TO_WORK",
      payload: filter,
    });
  };
}
