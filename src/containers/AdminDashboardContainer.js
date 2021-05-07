import React, { Component } from "react";
import fetchUsers from "../services/admin/fetchUsers.js";
import { addAdminAccessUsers } from "../actions/admin/adminAccessUsers";
import { connect } from "react-redux";
import UsersTable from "../components/admin/UsersTable";
import UserDataCard from "../components/admin/UserDataCard";

class AdminDashboardContainer extends Component {
  componentDidMount() {
    fetchUsers().then((res) => this.props.addAdminAccessUsers(res.data));
  }
  render() {
    return (
      <>
        <UsersTable />
        <UserDataCard />
      </>
    );
  }
}
export default connect(null, { addAdminAccessUsers })(AdminDashboardContainer);
