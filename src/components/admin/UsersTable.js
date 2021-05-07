import React, { useState } from "react";
import { connect } from "react-redux";
import "../../css/admin/UsersTable.css";
import "../../css/TextClasses.css";
import { ColumnFilter } from "../../actions/admin/ColumnFilter";
import { adminAccessSetSelectUser } from "../../actions/admin/adminAccessUsers";

import UserDataCard from "./UserDataCard";

function UsersTable(props) {
  const handleRowClick = (e) => {
    props.adminAccessSetSelectUser(e.target.parentElement.id);
  };

  const users = props.adminAccessUsers.users;
  const tableRows = users.map((user) => (
    <tr
      id={user.id}
      className={"table-row pointer"}
      key={user.created_at + user.id}
      onClick={(e) => handleRowClick(e)}
    >
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
            <th
              className={"table-cell text-align-left"}
              onClick={(e) => props.ColumnFilter(e.target.innerText)}
            >
              Name
            </th>
            <th className={"table-cell text-align-left"}>Email</th>
            <th className={"table-cell text-align-right"}>
              Outbound Nominations
            </th>
            <th className={"table-cell text-align-right"}>
              Inbound Nominations
            </th>
            <th className={"table-cell text-align-right"}>Open To Work</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    adminAccessUsers: state.adminAccessUsers,
  };
};

export default connect(mapStateToProps, {
  ColumnFilter,
  adminAccessSetSelectUser,
})(UsersTable);
