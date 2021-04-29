import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/loginUser";
import UserSideBar from "../components/UserSideBar";
import fetchCurrentUser from "../services/fetchCurrentUser";

class DashboardContainer extends Component {
  componentDidMount() {
    fetchCurrentUser().then((response) => this.props.loginUser(response.data));
  }

  render() {
    return (
      <div>
        <UserSideBar username={this.props.user.github_username} />
        Welcome to the dashboard {this.props.user.github_username}
        {process.env.API_ENDPOINT}
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
