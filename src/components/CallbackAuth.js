import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { initialUserLogin } from "../actions/initialUserLogin";

class CallbackAuth extends Component {
  constructor() {
    super();
    this.state = {
      redirect: null,
    };
  }
  componentDidMount() {
    this.props.initialUserLogin().then(() => {
      this.setState({
        redirect: true,
      });
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/dashboard"} />;
    }
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {
  initialUserLogin,
})(CallbackAuth);
