import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { postGoogleLogin } from "../actions/postGoogleLogin";
import React, { Component } from "react";
import "../css/MainButton.css";

class GoogleAuthLogin extends Component {
  onSuccess = (response) => {
    this.props.postGoogleLogin(response);
  };
  onFailure = () => {
    console.log("Failure");
  };
  render() {
    return (
      <div>
        <GoogleLogin
          render={(renderProps) => (
            <button
              className="main-button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Sign In With Google
            </button>
          )}
          clientId={window.googleClientId}
          buttonText="Login"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
          cookiePolicy={"single_host_origin"}
          style={{ marginTop: "100px" }}
          isSignedIn={true}
        />
      </div>
    );
  }
}

export default connect(null, { postGoogleLogin })(GoogleAuthLogin);
