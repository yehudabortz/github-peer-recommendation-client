import React, { Component } from "react";
import "../css/UserSelectionConfirmation.css";
import { connect } from "react-redux";
import createNomination from "../services/createNomination";
import { addNominatedUser } from "../actions/nominatedUsers";
import { updateUserFromSearch } from "../actions/userSearchResult";
import InputWithLabel from "./InputWithLabel";
import Avatar from "./Avatar";

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
        <form onSubmit={(event) => this.handleOnSubmit(event)} className="form">
          <p>Confirm Selection</p>
          <div className="result-wrap">
            <Avatar imgUrl={this.props.userSearchResult.avatar_url} />
            <h3>{this.props.userSearchResult.login}</h3>
          </div>
          {this.props.userSearchResult.email ? (
            ""
          ) : (
            <InputWithLabel
              className="input"
              name={"email"}
              value={this.state.input.email}
              handleChange={(e) => this.handleChange(e)}
            />
          )}
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
