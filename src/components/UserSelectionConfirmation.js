import React, { Component } from "react";
import "../css/UserSelectionConfirmation.css";
import { connect } from "react-redux";
import createNomination from "../services/createNomination";
import { addNominatedUser } from "../actions/nominatedUsers";
import { updateUserFromSearch } from "../actions/userSearchResult";

class UserSelectionConfirmation extends Component {
  constructor() {
    super();
    this.state = {
      input: {
        email: "",
      },
    };
  }
  handleChange = (e) => {
    this.setState({
      input: {
        [e.target.name]: e.target.value,
      },
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.userSearchResult.email = this.state.input.email;
    createNomination(this.props.userSearchResult)
      .then((res) => this.props.addNominatedUser(res.data.user))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className={"user-selection-confirmation " + this.props.display}>
        <h5>Confirm Selection</h5>
        <h3>{this.props.userSearchResult.login}</h3>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Email</label>
          <input
            className="input"
            name={"email"}
            type="text"
            value={this.state.input.email}
            onChange={(e) => this.handleChange(e)}
          />
          <input type="submit" className={"main-button"} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userSearchResult: state.userSearchResult,
  };
};
export default connect(mapStateToProps, {
  addNominatedUser,
  updateUserFromSearch,
})(UserSelectionConfirmation);
