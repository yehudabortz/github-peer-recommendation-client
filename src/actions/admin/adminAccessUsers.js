import axios from "axios";

export function addAdminAccessUsers(users) {
  return (dispatch) => {
    dispatch({ type: "ADD_ADMIN_ACCESS_USERS", payload: users });
  };
}

export function adminAccessSetSelectUser(user_id) {
  // debugger;
  return (dispatch) => {
    return axios
      .get(`${window.endpoint}/users/${user_id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      })
      .then((res) => {
        console.log(res);
        dispatch({ type: "ADMIN_ACCESS_SET_SELECTED_USER", payload: res.data });
      });
  };
}
