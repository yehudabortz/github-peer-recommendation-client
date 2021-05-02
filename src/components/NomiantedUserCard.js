import React, { Component } from "react";
import { connect } from "react-redux";

class NomiantedUserCard extends Component {
  render() {
    return (
      <div>
        <h2>Nominated User Here</h2>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    nominatedUsers: state.nomiantedUsers,
  };
};

export default connect()(NomiantedUserCard);
