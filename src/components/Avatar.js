import React, { Component } from "react";
import "../css/Avatar.css";
import avatarIcon from "../icons/Avatar-icon.svg";
export default class Avatar extends Component {
  render() {
    return (
      <>
        <img
          src={this.props.imgUrl}
          alt={this.props.imgUrl}
          className={this.props.className}
        />
      </>
    );
  }
}
Avatar.defaultProps = {
  imgUrl: avatarIcon,
  className: "avatar sml",
};
