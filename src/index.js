import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import App from "./App.js";

// GLOBAL API ENDPOINT VAR
// for Prod
// window.endpoint = "https://github-peer-recommendation-api.herokuapp.com";
// window.googleClientId =
//   "998032713164-2i8hgkh3n06l21bptt0e6soji9jtv4jp.apps.googleusercontent.com";
// window.githubClientId = "923c4ab837789f4f569a";

// for Dev
// window.githubClientId = "93ee34c94961f504075d";
window.endpoint = "http://localhost:4000";
window.googleClientId =
  "998032713164-cdesfccd8p7144k50id7alke2c40mlgt.apps.googleusercontent.com";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
