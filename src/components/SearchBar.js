import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/SearchBar.css";
import "../css/Visible.css";
import fetchCurrentUser from "../services/fetchCurrentUser";
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
          placeholder={"Search for a GitHub User"}
        />
        <UserSelectionConfirmation display={this.state.displayResult} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userSearcResults: state.userSearcResults,
  };
};
export default connect(mapStateToProps, { addUserFromSearch })(SearchBar);
