import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/logoutUser";
import GoogleAuthLogout from "./GoogleAuthLogout";
import Avatar from "./Avatar";
import StandardPageContentWrap from "./wrappers/StandardPageContentWrap";
import ExpandingMenu from "./ExpandingMenu";
import "../css/Navbar.css";
import "../css/Icons.css";
import Logo from "./Logo";

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
            <Logo />
            {this.props.auth.isLoggedIn === true ? (
              <div className={"nav-links-wrap"}>
                <ExpandingMenu>
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/settings">Settings</Link>
                  {this.props.currentUser?.user.admin ? (
                    <Link to="/admin/dashboard">Admin</Link>
                  ) : (
                    ""
                  )}
                  {this.props.auth.isLoggedIn === true ? (
                    <GoogleAuthLogout />
                  ) : (
                    <Link to="/login" className="main-button dark">
                      Login
                    </Link>
                  )}
                </ExpandingMenu>
                <Link to="/settings" className={"avatar sml"}>
                  <Avatar
                    imgUrl={
                      this.props.currentUser
                        ? this.props.currentUser.user.avatar
                        : undefined
                    }
                  />
                </Link>
              </div>
            ) : (
              ""
            )}
            {this.props.auth.isLoggedIn !== true ? (
              <div className={"nav-links-wrap"}>
                <ExpandingMenu>
                  {" "}
                  <Link to="/login" className="main-button dark">
                    Login
                  </Link>
                </ExpandingMenu>
              </div>
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
