import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/UserSearchResult.css";
import UserSelectionConfirmation from "./UserSelectionConfirmation";
import Avatar from "./Avatar";

class UserSearchResult extends Component {
  constructor() {
    super();
    this.state = {
      confirmation: "hidden",
    };
  }
  handleClick = () => {
    this.setState({
      confirmation: "show",
    });
  };

  render() {
    return (
      <div
        className={"search-result-wrapper " + this.props.display}
        onClick={this.handleClick}
      >
        <div className={"result"}>
          <h2>{this.props.userSearchResult.login}</h2>
          <Avatar
            imgUrl={this.props.userSearchResult.avatar_url}
            className={"avatar"}
          />
        </div>
        <UserSelectionConfirmation display={this.state.confirmation} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userSearchResult: state.userSearchResult,
  };
};
export default connect(mapStateToProps)(UserSearchResult);
