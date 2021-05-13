import React from "react";
import { GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import { logoutUser } from "../actions/logoutUser";
import "../css/MainButton.css";

function GoogleAuthLogout(props) {
  const onSuccess = () => {
    props.logoutUser();
    console.log("Logout made successfully");
  };

  return (
    <GoogleLogout
      render={(renderProps) => (
        <button
          className="main-button dark"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          Logout
        </button>
      )}
      clientId={window.googleClientId}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    ></GoogleLogout>
  );
}

export default connect(null, { logoutUser })(GoogleAuthLogout);
