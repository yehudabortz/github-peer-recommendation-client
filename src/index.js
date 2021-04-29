import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LoginConatainer from "./containers/LoginConatainer";
import DashboardContainer from "./containers/DashboardContainer";
import CallbackAuth from "./components/CallbackAuth";
import Navbar from "./components/Navbar";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

// GLOBAL API ENDPOINT VAR
window.endpoint = "http://localhost:4000";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Navbar} />
      <Route exact path="/login" component={LoginConatainer} />
      <Route path="/dashboard" component={DashboardContainer} />
      <Route path="/auth/github/callback" component={CallbackAuth} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
