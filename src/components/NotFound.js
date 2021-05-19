import React, { Component } from "react";
import "../css/NotFound.css";
import StandardPageContentWrap from "./wrappers/StandardPageContentWrap";

export default class NotFound extends Component {
  render() {
    return (
      <StandardPageContentWrap>
        <h1>404</h1>
        <h3>The page you are looking for does not exist</h3>
      </StandardPageContentWrap>
    );
  }
}
