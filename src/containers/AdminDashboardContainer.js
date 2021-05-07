import React, { Component } from "react";
import fetchUsers from "../services/admin/fetchUsers.js";
import { addAdminAccessUsers } from "../actions/admin/adminAccessUsers";
import { connect } from "react-redux";

class AdminDashboardContainer extends Component {
  componentDidMount() {
    fetchUsers().then((res) => this.props.addAdminAccessUsers(res.data));
  }
  render() {
    return (
      <div>
        <h1>Admin Dashboard</h1>
      </div>
    );
  }
}
export default connect(null, { addAdminAccessUsers })(AdminDashboardContainer);
