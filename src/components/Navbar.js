import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/logoutUser";
import MainButton from "./MainButton";

class Navbar extends Component {
  handleLogout = () => {
    console.log("logout");
    this.props.logoutUser();
  };
  render() {
    return (
      <div>
        <>
          <MainButton
            handleClick={this.handleLogout}
            text={"Logout"}
            theme={"dark"}
          />
        </>
        {this.props.auth.isLoggedIn ? <p>Logged in</p> : <p>Not Logged in</p>}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { logoutUser })(Navbar);
