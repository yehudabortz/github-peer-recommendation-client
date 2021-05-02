import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/logoutUser";
import MainButton from "./MainButton";
import Avatar from "./Avatar";

import "../css/Navbar.css";

class Navbar extends Component {
  handleLogout = () => {
    console.log("logout");
    this.props.logoutUser();
  };
  render() {
    return (
      <div className={"navbar"}>
        <>
          <MainButton
            handleClick={this.handleLogout}
            text={"Logout"}
            theme={"dark"}
          />
          <Avatar
            // imgUrl={this.props.currentUser.user.avatar}
            className={"avatar sml"}
          />
        </>
        {/* {this.props.auth.isLoggedIn ? <p>Logged in</p> : <p>Not Logged in</p>} */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, { logoutUser })(Navbar);
