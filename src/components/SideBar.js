import React, { Component } from "react";
import { connect } from "react-redux";

import "../css/SideBar.css";
class SideBar extends Component {
  render() {
    return (
      <div className={"sidebar"}>
        <h1 className={"main-title"}>
          Welcome @{this.props.user.github_username}
        </h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(SideBar);
