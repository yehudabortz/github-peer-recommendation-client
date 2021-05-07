import React, { Component } from "react";
import fetchUsers from "../services/admin/fetchUsers.js";
import { addAdminAccessUsers } from "../actions/admin/adminAccessUsers";
import { connect } from "react-redux";
import UsersTable from "../components/admin/UsersTable";

class AdminDashboardContainer extends Component {
  componentDidMount() {
    fetchUsers().then((res) => this.props.addAdminAccessUsers(res.data));
  }
  render() {
    return (
      <>
        <UsersTable />
      </>
    );
  }
}
export default connect(null, { addAdminAccessUsers })(AdminDashboardContainer);
