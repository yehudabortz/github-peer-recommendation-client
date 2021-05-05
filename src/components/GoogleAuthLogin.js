import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { postGoogleLogin } from "../actions/postGoogleLogin";
import React, { Component } from "react";

const clientId =
  "998032713164-cdesfccd8p7144k50id7alke2c40mlgt.apps.googleusercontent.com";

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
          clientId={clientId}
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
