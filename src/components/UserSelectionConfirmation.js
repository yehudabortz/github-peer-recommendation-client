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
    this.userConfirmation = React.createRef();
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
    if (this.props.userSearchResult.email === null) {
      this.props.userSearchResult.email = this.state.input.email;
    }
    createNomination(this.props.userSearchResult)
      .then((res) => this.props.addNominatedUser(res.data.user))
      .catch((err) => console.log(err));
    this.userConfirmation.current.classList.remove("show");
    this.userConfirmation.current.classList.add("hidden");
  };
  render() {
    return (
      <div
        className={"user-selection-confirmation " + this.props.display}
        ref={this.userConfirmation}
      >
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
