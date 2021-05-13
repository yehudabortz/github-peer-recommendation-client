import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import "./css/messages.css";
import LoginConatainer from "./containers/LoginConatainer";
import DashboardContainer from "./containers/DashboardContainer";
import AdminDashboardContainer from "./containers/AdminDashboardContainer";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import fetchCurrentUser from "./services/fetchCurrentUser";
import { loginUser } from "./actions/loginUser";
import Message from "./components/Message";
import MessagesWrap from "./components/MessagesWrap";

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
    return <p>Loading...</p>;
  }

  // let messages;
  // if (props.messages.length > 0) {
  //   let mapMessages = [];
  //   props.messages.map((msg) => {
  //     mapMessages.push(msg);
  //   });
  //   messages = <MessagesWrap messages={mapMessages} />;
  // }

  let notFoundRoutes = (
    <Route>
      <NotFound />
    </Route>
  );

  let adminRoutes;
  if (loggedIn && props.currentUser.user.admin) {
    adminRoutes = (
      <Route exact path="/admin/dashboard">
        {loggedIn ? <AdminDashboardContainer /> : <NotFound />}
      </Route>
    );
  }
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
        {loggedIn ? <DashboardContainer /> : <LoginConatainer />}
      </Route>
      {adminRoutes}
      {notFoundRoutes}
    </Switch>
  );

  return (
    <div>
      <Navbar />
      <MessagesWrap messages={props.messages} />
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
