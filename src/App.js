import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import LoginConatainer from "./containers/LoginConatainer";
import DashboardContainer from "./containers/DashboardContainer";
import CallbackAuth from "./components/CallbackAuth";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import fetchCurrentUser from "./services/fetchCurrentUser";
import { loginUser } from "./actions/loginUser";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fetch: "",
    };
  }

  componentWillMount() {
    if (localStorage.getItem("jwt")) {
      fetchCurrentUser().then((response) =>
        this.props.loginUser(response.data)
      );
    } else {
      console.log("Didnt work");
    }
  }

  render() {
    let auth = this.props.auth.isLoggedIn;
    // let auth = true;
    let routes = (
      <Switch>
        <Route path="/login">
          <LoginConatainer />
        </Route>
        <Route path="/auth/github/callback">
          <CallbackAuth />
        </Route>
        <Route exact path="/dashboard">
          {auth ? <DashboardContainer /> : <LoginConatainer />}
          {/* {auth ? <DashboardContainer /> : <Redirect to="/login" />} */}
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    );
    return (
      <div>
        <Navbar />
        {routes}
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
