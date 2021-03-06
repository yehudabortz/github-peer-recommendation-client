import React, { Component } from "react";
import fetchUsers from "../services/admin/fetchUsers.js";
import { addAdminAccessUsers } from "../actions/admin/adminAccessUsers";
import { connect } from "react-redux";
import UsersTable from "../components/admin/UsersTable";
import UserDataCard from "../components/admin/UserDataCard";
import {
  hideAdminAccessUserCard,
  adminAccessSetResultsCount,
} from "../actions/admin/adminAccessUsers";
import "../css/DivAttributes.css";

import StandardPageContentWrap from "../components/wrappers/StandardPageContentWrap";

class AdminDashboardContainer extends Component {
  componentDidMount() {
    if (this.props.page === 0) {
      fetchUsers(
        this.props.page,
        this.props.filter,
        this.props.displayCount
      ).then((res) =>
        this.props.addAdminAccessUsers(res.data.users, res.data.results_count)
      );
    }
  }
  handleClick = (e) => {
    // if (this.props.displayCard === "show") {
    //   this.props.hideAdminAccessUserCard();
    // }
  };

  render() {
    return (
      <div className={"min-full-height"} onClick={(e) => this.handleClick(e)}>
        <StandardPageContentWrap>
          <UserDataCard />
          <UsersTable />
        </StandardPageContentWrap>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayCard: state.adminAccessUsers.selectedUser.displayCard,
    page: state.adminAccessUsers.pagination.page,
    displayCount: state.adminAccessUsers.pagination.displayCount,
    filter: state.adminAccessUsers.filter,
  };
};
export default connect(mapStateToProps, {
  addAdminAccessUsers,
  hideAdminAccessUserCard,
  adminAccessSetResultsCount,
})(AdminDashboardContainer);
