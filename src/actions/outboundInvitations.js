import axios from "axios";

export function createAndReturnInviteLink(linkedin_handle) {
  const token = localStorage.getItem("jwt");
  return (dispatch) => {
    return axios({
      method: "POST",
      url: `${window.endpoint}/invites`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        invite_object: {
          linkedin_handle: linkedin_handle,
        },
      },
    });
  };
}

export function updatedOutboundInviteToken(tokenObj) {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_OUTBOUND_INVITE_TOKEN",
      payload: tokenObj,
    });
  };
}

export function clearOutboundInviteToken() {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_OUTBOUND_INVITE_TOKEN",
    });
  };
}
