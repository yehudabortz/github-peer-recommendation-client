import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/SearchBar.css";
import "../css/Visible.css";
import { addUserFromSearch } from "../actions/userSearchResult";
import UserSelectionConfirmation from "./UserSelectionConfirmation";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      displayResult: "hidden",
    };
  }

  handleOnChange = (e) => {
    if (e.target.value === "") {
      this.setState({
        input: "",
        displayResult: "hidden",
      });
    } else {
      this.setState({
        input: e.target.value,
        displayResult: "show",
      });
    }
  };
  componentDidUpdate() {
    this.props.addUserFromSearch(this.state.input);
  }

  render() {
    return (
      <>
        <input
          className="search-bar"
          type="text"
          value={this.state.input}
          onChange={(e) => this.handleOnChange(e)}
          placeholder={"Copy and paste your nomination's LinkedIn URL here."}
        />
        <UserSelectionConfirmation display={this.state.displayResult} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userSearchResults: state.userSearchResults,
  };
};
export default connect(mapStateToProps, { addUserFromSearch })(SearchBar);
