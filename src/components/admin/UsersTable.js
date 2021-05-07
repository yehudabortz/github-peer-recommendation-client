import React from "react";
import { connect } from "react-redux";
import "../../css/admin/UsersTable.css";
import "../../css/TextClasses.css";

function UsersTable(props) {
  const users = props.adminAccessUsers.users;
  const tableRows = users.map((user) => (
    <tr className={"table-row"} key={user.created_at + user.id}>
      <td className={"table-cell text-align-left"}>{user.name}</td>
      <td className={"table-cell text-align-left"}>{user.email}</td>
      <td className={"table-cell text-align-right"}>
        {user.outbound_nominations.length}
      </td>
      <td className={"table-cell text-align-right"}>
        {user.inbound_nominations.length}
      </td>
    </tr>
  ));

  return (
    <div className={"table-wrap"}>
      <table className={"users-table"}>
        <tr className={"table-row table-head"}>
          <th className={"table-cell text-align-left"}>Name</th>
          <th className={"table-cell text-align-left"}>Email</th>
          <th className={"table-cell text-align-right"}>
            Outbound Nominations
          </th>
          <th className={"table-cell text-align-right"}>Inbound Nominations</th>
        </tr>
        {tableRows}
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    adminAccessUsers: state.adminAccessUsers,
  };
};

export default connect(mapStateToProps)(UsersTable);
