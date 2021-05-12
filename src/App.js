import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./css/errorMessages.css";
import LoginConatainer from "./containers/LoginConatainer";
import DashboardContainer from "./containers/DashboardContainer";
import AdminDashboardContainer from "./containers/AdminDashboardContainer";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import fetchCurrentUser from "./services/fetchCurrentUser";
import { loginUser } from "./actions/loginUser";
import ErrorMessage from "./components/ErrorMessage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fetch: "",
    };
  }

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
    let error;
    if (this.props.errorMessages.length > 0) {
      this.props.errorMessages.map((err) => {
        error = <ErrorMessage err={err} />;
      });
    }
    let auth = this.props.auth.isLoggedIn;
    let currentUser = this.props.currentUser.user;
    let routes = (
      <Switch>
        <Route exact path="/">
          <LoginConatainer />
        </Route>
        <Route path="/login">
          <LoginConatainer />
        </Route>
        <Route path="/nominations/:id/invite">
          <LoginConatainer />
        </Route>
        <Route exact path="/dashboard">
          {auth ? <DashboardContainer /> : <LoginConatainer />}
        </Route>
        <Route exact path="/admin/dashboard">
          {currentUser.admin ? <AdminDashboardContainer /> : <NotFound />}
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    );
    return (
      <div>
        {error}
        <Navbar />
        {routes}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    currentUser: state.currentUser,
    errorMessages: state.errorMessages.messages,
  };
};

export default connect(mapStateToProps, { loginUser })(App);
