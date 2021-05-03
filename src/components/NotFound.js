import React, { Component } from "react";
import "../css/NotFound.css";

export default class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h1>404</h1>
        <h3>The page you are looking for does not exist</h3>
      </div>
    );
  }
}
