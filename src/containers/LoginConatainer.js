import React, { Component } from "react";

import { GithubLogin } from "../components/GithubLogin";
import GoogleAuthLogin from "../components/GoogleAuthLogin";

export default class LoginContainer extends Component {
  render() {
    return (
      <div>
        <GithubLogin />
        <GoogleAuthLogin />
      </div>
    );
  }
}
