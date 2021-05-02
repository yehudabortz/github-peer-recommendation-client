import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/NomiantedUserCard.css";
import Avatar from "./Avatar";

class NomiantedUserCard extends Component {
  render() {
    return (
      <div className={"nominated-user-card"}>
        <Avatar imgUrl={this.props.user.avatar} className={"avatar sml"} />
        <h2 className={"user-title"}>{this.props.user.github_username}</h2>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(NomiantedUserCard);
