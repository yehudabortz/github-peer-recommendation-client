import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/SearchBar.css";
import "../css/Visible.css";
import { addUserFromSearch } from "../actions/userSearchResult";
import UserSelectionConfirmation from "./UserSelectionConfirmation";

class SearchBar extends Component {
  handleOnChange = (e) => {
    this.props.addUserFromSearch(e.target.value);
  };

  render() {
    return (
      <>
        <input
          className="search-bar"
          type="text"
          value={this.props.userSearchResult.handle}
          onChange={(e) => this.handleOnChange(e)}
          placeholder={"Copy and paste your nomination's LinkedIn URL here."}
        />
        <UserSelectionConfirmation />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userSearchResult: state.userSearchResult,
  };
};
export default connect(mapStateToProps, { addUserFromSearch })(SearchBar);
