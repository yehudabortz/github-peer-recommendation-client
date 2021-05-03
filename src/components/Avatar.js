import React, { Component } from "react";
import "../css/Avatar.css";

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
  imgUrl:
    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
  className: "avatar sml",
};
