import axios from "axios";

export function addAdminAccessUsers(users, results_count = 10) {
  return (dispatch) => {
    dispatch({ type: "ADD_ADMIN_ACCESS_USERS", payload: users });
    dispatch({
      type: "ADMIN_ACCESS_SET_RESULTS_COUNT",
      payload: results_count,
    });
  };
}

export function adminAccessSetSelectUser(user_id) {
  return (dispatch) => {
    return axios
      .get(`${window.endpoint}/users/${user_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch({ type: "ADMIN_ACCESS_SET_SELECTED_USER", payload: res.data });
      });
  };
}

export function showAdminAccessUserCard() {
  return (dispatch) => {
    dispatch({ type: "ADMIN_ACCESS_SHOW_USER_CARD", payload: "show" });
  };
}

export function hideAdminAccessUserCard() {
  return (dispatch) => {
    dispatch({ type: "ADMIN_ACCESS_HIDE_USER_CARD", payload: "hidden" });
  };
}

export function adminAccessSetPage(page) {
  return (dispatch) => {
    dispatch({ type: "ADMIN_ACCESS_SET_PAGE", payload: page });
  };
}

export function adminAccessSetResultsCount(count) {
  return (dispatch) => {
    dispatch({ type: "ADMIN_ACCESS_SET_RESULTS_COUNT", payload: count });
  };
}
