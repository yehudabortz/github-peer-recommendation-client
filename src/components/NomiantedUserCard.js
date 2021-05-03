import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/NomiantedUserCard.css";
import "../css/MainButton.css";
import Avatar from "./Avatar";
import removeNomination from "../services/removeNomination";
import { removeNominatedUser } from "../actions/nominatedUsers";

class NomiantedUserCard extends Component {
  handleClick = () => {
    removeNomination(this.props.user).then(() =>
      this.props.removeNominatedUser(this.props.user)
    );
  };
  render() {
    return (
      <div className={"nominated-user-card"}>
        <Avatar imgUrl={this.props.user.avatar} className={"avatar sml"} />
        <h2 className={"user-title"}>{this.props.user.github_username}</h2>
        <button className="main-button dark sml" onClick={this.handleClick}>
          Remove
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

NomiantedUserCard.defaultProps = {
  user: {
    avatar:
      "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
  },
};

export default connect(mapStateToProps, {
  removeNominatedUser,
})(NomiantedUserCard);
