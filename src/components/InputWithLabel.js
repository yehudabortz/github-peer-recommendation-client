import React, { Component } from "react";
import "../css/InputWithLabel.css";

export default class InputWithLabel extends Component {
  render() {
    return (
      <div className={"form-input-block"}>
        <label>Email</label>
        <input
          className={this.props.className}
          name={this.props.name}
          type="text"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
