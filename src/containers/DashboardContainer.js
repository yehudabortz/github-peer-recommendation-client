import React, { Component } from "react";
import { connect } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../actions/loginUser";
import jwt_decode from "jwt-decode";
import UserSideBar from "../components/UserSideBar";
import fetchCurrentUser from "../services/fetchCurrentUser";

class DashboardContainer extends Component {
  componentDidMount() {
    const token = localStorage.getItem("jwt");
    const decoded = jwt_decode(token);
    const url = `http://localhost:4000/users/${decoded["user_id"]}/account`;

    fetchCurrentUser(url, token).then((response) =>
      this.props.loginUser(response.data)
    );
  }

  render() {
    return (
      <div>
        <UserSideBar username={this.props.user.github_username} />
        Welcome to the dashboard {this.props.user.github_username}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { loginUser })(DashboardContainer);
