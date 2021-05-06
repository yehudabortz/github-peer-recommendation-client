import React, { Component } from "react";
import "../css/UserSelectionConfirmation.css";
import "../css/Visible.css";
import { connect } from "react-redux";
import createNomination from "../services/createNomination";
import { addNominatedUser } from "../actions/nominatedUsers";
import { updateUserFromSearch } from "../actions/userSearchResult";
import "../css/TextClasses.css";

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
      <>
        <h4 className={"header-with-top-bottom-margin " + this.props.display}>
          Confirm Nomination
        </h4>
        <div className={"user-selection-confirmation " + this.props.display}>
          <form
            onSubmit={(event) => this.handleOnSubmit(event)}
            className="form"
          >
            <div className="result-wrap">
              <h3>
                <span className={"muted-text"}>linkedin.com/in/</span>
                {this.props.userSearchResult.handle}
              </h3>
            </div>
            <input type="submit" className={"main-button"} />
          </form>
        </div>
      </>
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
