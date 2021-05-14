import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import "./css/messages.css";
import LoginContainer from "./containers/LoginContainer";
import DashboardContainer from "./containers/DashboardContainer";
import AdminDashboardContainer from "./containers/AdminDashboardContainer";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import fetchCurrentUser from "./services/fetchCurrentUser";
import { loginUser } from "./actions/loginUser";
import MessagesWrap from "./components/MessagesWrap";
import Loading from "./components/Loading";

function App(props) {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(props.auth.isLoggedIn);

  useEffect(() => {
    if (loading) {
      if (localStorage.getItem("jwt")) {
        fetchCurrentUser()
          .then((response) => props.loginUser(response.data))
          .then(() => setLoggedIn(true))
          .catch((error) => console.log(error))
          .finally(() => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    }
  }, [props]);

  if (loading) {
    return <Loading />;
  }

  let notFoundRoutes = (
    <Route>
      <NotFound />
    </Route>
  );

  let adminRoutes;
  // if (props.currentUser.user.admin && loggedIn) {
  adminRoutes = (
    <Route exact path="/admin/dashboard">
      {loggedIn ? <AdminDashboardContainer /> : <NotFound />}
    </Route>
  );
  // }
  let routes = (
    <Switch>
      <Route exact path="/">
        <LoginContainer />
      </Route>
      <Route exact path="/login">
        <LoginContainer />
      </Route>
      <Route path="/nominations/:id/invite">
        <LoginContainer />
      </Route>
      <Route exact path="/dashboard">
        <DashboardContainer />
      </Route>
      {adminRoutes}
      {notFoundRoutes}
    </Switch>
  );
  return (
    <div>
      <MessagesWrap />
      <Navbar />
      {routes}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    currentUser: state.currentUser,
    messages: state.messages.messages,
  };
};

export default connect(mapStateToProps, { loginUser })(App);
