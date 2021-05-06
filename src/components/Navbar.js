import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { logoutUser } from "../actions/logoutUser";
import MainButton from "./MainButton";
import GoogleAuthLogout from "./GoogleAuthLogout";
import GoogleAuthLogin from "./GoogleAuthLogin";
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
          {this.props.auth.isLoggedIn === true ? (
            <GoogleAuthLogout />
          ) : (
            <Link to="/login" className="main-button dark">
              Login
            </Link>
          )}
          <Avatar
            imgUrl={
              this.props.currentUser
                ? this.props.currentUser.user.avatar
                : undefined
            }
            className={"avatar sml"}
          />
        </>
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
