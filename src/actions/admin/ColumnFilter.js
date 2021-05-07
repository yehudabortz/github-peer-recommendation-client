export function ColumnFilter(column) {
  return (dispatch) => {
    dispatch({ type: "FILTER_ADMIN_ACCESS_USERS_ABC", payload: column });
  };
}
