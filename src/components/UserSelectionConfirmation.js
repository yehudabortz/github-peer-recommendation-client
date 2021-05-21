import React, { Component } from "react";
import uuid from "uuid";
import "../css/Visible.css";
import { connect } from "react-redux";
import createNomination from "../services/createNomination";
import { addNominatedUser } from "../actions/nominatedUsers";
import { updateUserSearchRelationship } from "../actions/userSearchResult";
import { addUserFromSearch } from "../actions/userSearchResult";
import "../css/TextClasses.css";
import "../css/UserSelectionConfirmation.css";

import Select from "./Select";
import Divider from "./Divider";

class UserSelectionConfirmation extends Component {
  constructor() {
    super();
    this.state = {
      selected: "co_worker",
    };
  }

  handleSelectChange = (e) => {
    e.preventDefault();
    if (e.target.value === "past_co_worker") {
      this.setState({ selected: "past_co_worker" });
      this.props.updateUserSearchRelationship(false);
    } else if (e.target.value === "co_worker") {
      this.setState({ selected: "co_worker" });
      this.props.updateUserSearchRelationship(true);
    }
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    createNomination(this.props.userSearchResult)
      .then((res) => this.props.addNominatedUser(res.data))
      .catch((err) => console.log(err))
      .finally(() => {
        this.props.addUserFromSearch("");
      });
  };
  render() {
    if (this.props.userSearchResult.handle.trim().length < 1) {
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
              <h3>{this.props.userSearchResult.handle}</h3>
            </div>
            <Select
              defaultValue={this.state.selected}
              onChange={(e) => this.handleSelectChange(e)}
              s
            >
              <option
                key={uuid()}
                selected={this.state.selected === "co_worker" ? true : false}
                value={"co_worker"}
              >
                Current Co-Worker
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
            </Select>
            <input
              type="submit"
              className={"main-button"}
              value={"Add My Nomination"}
            />
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
