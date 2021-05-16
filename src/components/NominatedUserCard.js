import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/NominatedUserCard.css";
import "../css/MainButton.css";
import Avatar from "./Avatar";
import removeNomination from "../services/removeNomination";
import { removeNominatedUser } from "../actions/nominatedUsers";
import { addMessage } from "../actions/messages";

class NominatedUserCard extends Component {
  handleClick = () => {
    removeNomination(this.props.user).then(
      this.props.removeNominatedUser(this.props.user)
    );
  };
  render() {
    return (
      <div className={"nominated-user-card " + this.props.status}>
        <Avatar className={"avatar sml"} />
        {this.props.status === "inactive" ? (
          ""
        ) : (
          <h2 className={"user-title"}>@{this.props.user.linkedin_handle}</h2>
        )}
        {this.props.status === "inactive" ? (
          ""
        ) : (
          <button className="main-button sml" onClick={this.handleClick}>
            Remove
          </button>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, {
  removeNominatedUser,
  addMessage,
})(NominatedUserCard);
