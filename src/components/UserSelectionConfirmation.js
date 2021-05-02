import React, { Component } from "react";
import "../css/UserSelectionConfirmation.css";
import { connect } from "react-redux";
import createNomination from "../services/createNomination";
import { addNominatedUser } from "../actions/nominatedUsers";

class UserSelectionConfirmation extends Component {
  handleClick = () => {
    console.log(this.props.userSearchResult);
    createNomination(this.props.userSearchResult).then((res) =>
      this.props.addNominatedUser(res.data.user)
    );
  };
  render() {
    return (
      <div
        className={"user-selection-confirmation " + this.props.display}
        onClick={this.handleClick}
      >
        <h5>Confirm Selection</h5>
        <h3>{this.props.userSearchResult.login}</h3>

        <button className="main-button">Confirm</button>
        <form></form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userSearchResult: state.userSearchResult,
  };
};
export default connect(mapStateToProps, { addNominatedUser })(
  UserSelectionConfirmation
);
