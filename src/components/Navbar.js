import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/logoutUser";

class Navbar extends Component {
  handleLogout = () => {
    console.log("logout");
    this.props.logoutUser();
  };
  render() {
    return (
      <div>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default connect(null, { logoutUser })(Navbar);
