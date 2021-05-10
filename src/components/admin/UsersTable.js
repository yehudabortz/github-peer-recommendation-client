import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../../css/admin/UsersTable.css";
import "../../css/TextClasses.css";
import {
  adminAccessSetSelectUser,
  showAdminAccessUserCard,
  adminAccessSetPage,
  addAdminAccessUsers,
  adminAccessSetResultsCount,
} from "../../actions/admin/adminAccessUsers";
import { filterOpenToWork } from "../../actions/admin/columnFilters";
import PageDisplayCountList from "./PageDisplayCountList";

import fetchUsers from "../../services/admin/fetchUsers";
import PaginationPageNumbers from "./PaginationPageNumbers";
import {
  forwardPagination,
  backwardPagination,
} from "./paginationNavigation.js";

function UsersTable(props) {
  const handleRowClick = (e) => {
    e.stopPropagation();
    props.adminAccessSetSelectUser(e.target.parentElement.id);
    props.showAdminAccessUserCard();
  };

  const [filter, setFilter] = useState(props.filter);
  const [page, setPage] = useState(props.page);

  useEffect(() => {
    if (page !== props.page || filter !== props.filter) {
      setPage(props.page);
      setFilter(props.filter);
      fetchUsers(props.page, props.filter, props.displayCount).then((res) =>
        props.addAdminAccessUsers(res.data.users, res.data.results_count)
      );
      if (filter !== props.filter) {
        props.adminAccessSetPage(0);
      }
    }
  });

  const handleForwardPagination = () => {
    forwardPagination(props);
  };
  const handleBackPagination = () => {
    backwardPagination(props);
  };

  const handleFilterClick = () => {
    if (props.filter.open_to_work !== true || false) {
      props.filterOpenToWork(true);
    } else {
      props.filterOpenToWork(!props.filter.open_to_work);
    }
  };

  const users = props.adminAccessUsers.users;
  const tableRows = users.map((user) => (
    <tr
      id={user.id}
      className={"table-row pointer"}
      key={user.created_at + user.id}
      onClick={(e) => handleRowClick(e)}
    >
      <td className={"table-cell text-align-left"}>{user.linkedin_handle}</td>
      <td className={"table-cell text-align-left"}>{user.name}</td>
      <td className={"table-cell text-align-left"}>{user.email}</td>
      <td className={"table-cell text-align-right"}>
        {user.outbound_nominations.length}
      </td>
      <td className={"table-cell text-align-right"}>
        {user.inbound_nominations.length}
      </td>
      <td className={"table-cell text-align-right"}>
        {user.open_to_work ? "✅" : "❌"}
      </td>
    </tr>
  ));

  return (
    <div className={"table-wrap"}>
      <table className={"users-table"}>
        <thead>
          <tr className={"table-row table-head"}>
            <th className={"table-cell text-align-left"}>LinkedIn</th>
            <th className={"table-cell text-align-left"}>Name</th>
            <th className={"table-cell text-align-left"}>Email</th>
            <th className={"table-cell text-align-right"}>
              Outbound Nominations
            </th>
            <th className={"table-cell text-align-right"}>
              Inbound Nominations
            </th>
            <th
              className={"table-cell text-align-right pointer text-hover-color"}
              onClick={handleFilterClick}
            >
              Open To Work
            </th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
          <tr className={"table-row"}>
            <td className={"table-cell text-align-left"}>
              <p
                className={"muted-text pointer text-hover-color"}
                onClick={handleBackPagination}
              >
                Back
              </p>
            </td>
            <td></td>
            <td>
              <PageDisplayCountList />
            </td>
            <td>
              <PaginationPageNumbers />
            </td>
            <td></td>
            <td className={"table-cell text-align-right"}>
              <p
                className={"muted-text pointer text-hover-color"}
                onClick={handleForwardPagination}
              >
                Next Page
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    adminAccessUsers: state.adminAccessUsers,
    page: state.adminAccessUsers.pagination.page,
    filter: state.adminAccessUsers.filter,
    displayCount: state.adminAccessUsers.pagination.displayCount,
    resultsPages: state.adminAccessUsers.pagination.resultsPages,
  };
};

export default connect(mapStateToProps, {
  adminAccessSetSelectUser,
  showAdminAccessUserCard,
  adminAccessSetPage,
  addAdminAccessUsers,
  filterOpenToWork,
  adminAccessSetResultsCount,
})(UsersTable);
