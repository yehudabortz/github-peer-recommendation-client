export function addAdminAccessUsers(users) {
  return (dispatch) => {
    dispatch({ type: "ADD_ADMIN_ACCESS_USERS", payload: users });
  };
}
