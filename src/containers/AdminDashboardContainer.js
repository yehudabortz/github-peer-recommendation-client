import React, { Component } from "react";
import fetchUsers from "../services/admin/fetchUsers.js";
import { addAdminAccessUsers } from "../actions/admin/adminAccessUsers";
import { connect } from "react-redux";
import UsersTable from "../components/admin/UsersTable";
import UserDataCard from "../components/admin/UserDataCard";
import { hideAdminAccessUserCard } from "../actions/admin/adminAccessUsers";
import "../css/DivAttributes.css";

class AdminDashboardContainer extends Component {
  componentDidMount() {
    if (this.props.page === 0) {
      fetchUsers(this.props.page).then((res) =>
        this.props.addAdminAccessUsers(res.data)
      );
    }
  }
  handleClick = () => {
    if (this.props.displayCard === "show") {
      this.props.hideAdminAccessUserCard();
    }
  };

  render() {
    return (
      <div className={"min-full-height"} onClick={this.handleClick}>
        <UsersTable />
        <UserDataCard />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayCard: state.adminAccessUsers.selectedUser.displayCard,
    page: state.adminAccessUsers.page,
  };
};
export default connect(mapStateToProps, {
  addAdminAccessUsers,
  hideAdminAccessUserCard,
})(AdminDashboardContainer);
