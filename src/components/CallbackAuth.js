import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../actions/loginUser";

class CallbackAuth extends Component {
  constructor() {
    super();
    this.state = {
      redirect: null,
    };
  }
  componentDidMount() {
    this.props.loginUser();
    this.setState({
      redirect: true,
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/dashboard"} />;
    }
    return <div>{this.state.loggedInStatus}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {
  loginUser,
})(CallbackAuth);
