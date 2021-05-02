import React, { Component } from "react";
import "../css/Avatar.css";

export default class Avatar extends Component {
  render() {
    return (
      <img
        src={this.props.imgUrl}
        alt={this.props.imgUrl}
        className={this.props.className}
      />
    );
  }
}
