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
    };
  }

  handleOnChange = (e) => {
    this.setState({
      input: e.target.value,
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
        <form className="search-bar">
          <input
            type="text"
            value={this.state.input}
            onChange={(e) => this.handleOnChange(e)}
          />
          <input type="submit" />
        </form>
        <UserSearchResult />
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
