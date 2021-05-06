import React, { Component } from "react";
import { connect } from "react-redux";

import "../css/SideBar.css";
class SideBar extends Component {
  render() {
    return (
      <div className={"sidebar"}>
        <h1 className={"main-title"}>
          Welcome
          <br></br>
          {this.props.currentUser.user.name}
        </h1>
        <br />
        {this.props.currentUser.score ? (
          <p>Your Score {this.props.currentUser.score}</p>
        ) : (
          ""
        )}
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
