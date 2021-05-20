import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/logoutUser";
import GoogleAuthLogout from "./GoogleAuthLogout";
import Avatar from "./Avatar";
import StandardPageContentWrap from "./wrappers/StandardPageContentWrap";
import "../css/Navbar.css";

class Navbar extends Component {
  handleLogout = () => {
    console.log("logout");
    this.props.logoutUser();
  };
  render() {
    return (
      <StandardPageContentWrap>
        <div className={"navbar"}>
          <>
            {this.props.auth.isLoggedIn === true ? (
              <GoogleAuthLogout />
            ) : (
              <Link to="/login" className="main-button dark">
                Login
              </Link>
            )}

            {this.props.auth.isLoggedIn === true ? (
              <Link to="/settings" className={"avatar sml"}>
                <Avatar
                  imgUrl={
                    this.props.currentUser
                      ? this.props.currentUser.user.avatar
                      : undefined
                  }
                />
              </Link>
            ) : (
              ""
            )}
          </>
        </div>
      </StandardPageContentWrap>
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
