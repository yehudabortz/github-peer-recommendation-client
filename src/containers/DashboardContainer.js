import React, { Component } from "react";
import { connect } from "react-redux";

class DashboardContainer extends Component {
  componentDidMount() {}
  componentDidUpdate() {
    console.log(this.props.user);
  }

  render() {
    return (
      <div>
        <h2>nice</h2>
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

export default connect(mapStateToProps)(DashboardContainer);
