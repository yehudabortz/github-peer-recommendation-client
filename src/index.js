import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import App from "./App.js";

if (document.location.host === "localhost:3000") {
  window.hostName = document.location.host;
} else {
  window.hostName = `https://${document.location.host}`;
}
// GLOBAL API ENDPOINT VAR
// For Prod
// window.endpoint = "https://github-peer-recommendation-api.herokuapp.com";
// window.googleClientId =
//   "998032713164-2i8hgkh3n06l21bptt0e6soji9jtv4jp.apps.googleusercontent.com";

// For Dev
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
