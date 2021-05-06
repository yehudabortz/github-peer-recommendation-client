import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LoginConatainer from "./containers/LoginConatainer";
import DashboardContainer from "./containers/DashboardContainer";
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
    let auth = this.props.auth.isLoggedIn;
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
