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
  window.endpoint = "http://localhost:4000";
  window.googleClientId =
    "63065976471-oh95s8k06od8lctuferd5d460f73au5d.apps.googleusercontent.com";
} else {
  window.hostName = `https://${document.location.host}`;
  window.endpoint = "https://github-peer-recommendation-api.herokuapp.com";
  window.googleClientId =
    "63065976471-ba0hugj89qq53base414sglphb04cgan.apps.googleusercontent.com";
}

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
