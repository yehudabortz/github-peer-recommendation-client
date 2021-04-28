import React, { Component } from "react";
import axios from "axios";

export default class CallbackAuth extends Component {
  constructor() {
    super();
    this.state = {
      loggingIn: false,
    };
  }
  componentDidMount() {
    axios({
      method: "post",
      url: "http://localhost:4000/auth/github_oauth2/callback",
      data: {
        code: window.location.href.split("code=")[1],
      },
    }).then((response) => console.log(response.data.user));
  }
  render() {
    return (
      <div>
        Redirecting
        {this.state.tempCode}
      </div>
    );
  }
}
