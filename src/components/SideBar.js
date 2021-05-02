import React, { Component } from "react";
import { connect } from "react-redux";

import "../css/SideBar.css";
class SideBar extends Component {
  render() {
    return (
      <div className={"sidebar"}>
        <h1 className={"main-title"}>
          Welcome @{this.props.currentUser.user.github_username}
        </h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(SideBar);
