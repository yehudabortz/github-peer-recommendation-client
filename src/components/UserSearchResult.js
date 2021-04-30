import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/UserSearchResult.css";
import Avatar from "./Avatar";

class UserSearchResult extends Component {
  render() {
    return (
      <div className={"search-result-wrapper"}>
        <h2>{this.props.userSearchResult.login}</h2>
        <Avatar
          imgUrl={this.props.userSearchResult.avatar_url}
          className={"avatar"}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userSearchResult: state.userSearchResult,
  };
};
export default connect(mapStateToProps)(UserSearchResult);
