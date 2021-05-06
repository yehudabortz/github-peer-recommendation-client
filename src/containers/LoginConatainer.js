import React, { Component } from "react";

import { GithubLogin } from "../components/GithubLogin";
import GoogleAuthLogin from "../components/GoogleAuthLogin";
import "../css/Login.css";

export default class LoginContainer extends Component {
  render() {
    return (
      <div className={"login-screen-wrap"}>
        <div className={"login-screen-card"}>
          <GoogleAuthLogin />
        </div>
      </div>
    );
  }
}
