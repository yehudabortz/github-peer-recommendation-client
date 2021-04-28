import React, { Component } from "react";
import { GithubLogin } from "../components/GithubLogin";

export default class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }
  render() {
    return (
      <div>
        <GithubLogin />
      </div>
    );
  }
}
