import React, { Component } from "react";
import "../css/UserSelectionConfirmation.css";
import uuid from "uuid";
import "../css/Visible.css";
import { connect } from "react-redux";
import createNomination from "../services/createNomination";
import { addNominatedUser } from "../actions/nominatedUsers";
import { updateUserSearchRelationship } from "../actions/userSearchResult";
import { addUserFromSearch } from "../actions/userSearchResult";
import "../css/TextClasses.css";

class UserSelectionConfirmation extends Component {
  constructor(props) {
    super();
    this.state = {
      selected: "co_worker",
    };
  }

  handleSelectChange = (e) => {
    e.preventDefault();
    if (e.target.value == "past_co_worker") {
      this.setState({ selected: "past_co_worker" });
      this.props.updateUserSearchRelationship(false);
    } else if (e.target.value == "co_worker") {
      this.setState({ selected: "co_worker" });
      this.props.updateUserSearchRelationship(true);
    }
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    createNomination(this.props.userSearchResult)
      // .then((res) => console.log(res.data))
      .then((res) => this.props.addNominatedUser(res.data))
      .catch((err) => console.log(err))
      .finally(() => {
        this.props.addUserFromSearch("");
      });
  };
  render() {
    if (this.props.userSearchResult.handle.length < 1) {
      return <></>;
    }
    return (
      <>
        <h4 className={"header-with-top-bottom-margin"}>Confirm Nomination</h4>
        <div className={"user-selection-confirmation"}>
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
            <select
              defaultValue={this.state.selected}
              onChange={(e) => this.handleSelectChange(e)}
              className={"select-option"}
            >
              <option
                key={uuid()}
                selected={this.state.selected === "co_worker" ? true : false}
                value={"co_worker"}
              >
                Co-Worker
              </option>
              <option
                selected={
                  this.state.selected === "past_co_worker" ? true : false
                }
                key={uuid()}
                value={"past_co_worker"}
              >
                Past Co-Worker
              </option>
            </select>
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
  updateUserSearchRelationship,
  addUserFromSearch,
})(UserSelectionConfirmation);
