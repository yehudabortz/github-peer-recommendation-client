import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";
import LoginConatainer from "./containers/LoginConatainer";
import DashboardContainer from "./containers/DashboardContainer";
import CallbackAuth from "./components/CallbackAuth";
import Navbar from "./components/Navbar";
import { connect } from "react-redux";

import fetchCurrentUser from "./services/fetchCurrentUser";
import { loginUser } from "./actions/loginUser";

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("jwt")) {
      fetchCurrentUser().then((response) =>
        this.props.loginUser(response.data)
      );
    } else {
      console.log("Didnt work");
    }
  }

  render() {
    return (
      <div>
        <Route path="/dashboard" component={DashboardContainer} />
        <Route path="/" component={Navbar} />
        <Route exact path="/login" component={LoginConatainer} />
        <Route path="/auth/github/callback" component={CallbackAuth} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { loginUser })(App);
