import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
          {this.props.auth.isLoggedIn === true ? (
            <MainButton
              handleClick={this.handleLogout}
              text={"Logout"}
              theme={"dark"}
            />
          ) : (
            <Link to="login" className="main-button dark">
              Login
            </Link>
          )}
          <Avatar
            imgUrl={this.props.currentUser.user.avatar}
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
