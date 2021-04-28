import React, { Component } from "react";

import { GithubLogin } from "../components/GithubLogin";

export default class LoginContainer extends Component {
  render() {
    return (
      <div>
        <GithubLogin />
      </div>
    );
  }
}
