import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/SearchBar.css";
import fetchCurrentUser from "../services/fetchCurrentUser";
import { addUserFromSearch } from "../actions/userSearchResult";
import UserSearchResult from "./UserSearchResult";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      displayResult: "hidden",
    };
  }

  handleOnChange = (e) => {
    this.setState({
      input: e.target.value,
      displayResult: "show",
    });
  };
  componentDidUpdate() {
    fetchCurrentUser(
      `${window.endpoint}/search/github/users?q=${this.state.input}`
    ).then((response) => this.props.addUserFromSearch(response.data.user));
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
        <UserSearchResult display={this.state.displayResult} />
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
