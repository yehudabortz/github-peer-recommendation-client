import React, { Component } from "react";
import { connect } from "react-redux";

class NomiantedUserCard extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.user.github_username}</h2>
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
