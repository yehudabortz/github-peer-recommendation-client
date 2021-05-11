import React, { useState } from "react";
import fetchUsers from "../../services/admin/fetchUsers";
import "../../css/admin/PageDisplayCountList.css";
import { connect } from "react-redux";
import {
  adminAccessSetDisplayCount,
  adminAccessSetPage,
  addAdminAccessUsers,
} from "../../actions/admin/adminAccessUsers";
import uuid from "uuid";

const PageDisplayCountList = (props) => {
  function handleDisplayCountChange(e) {
    e.preventDefault();
    fetchUsers(
      props.page,
      props.filter,
      e.target.selectedOptions[0].value
    ).then((res) =>
      props.addAdminAccessUsers(res.data.users, res.data.results_count)
    );
    props.adminAccessSetPage(0);
    props.adminAccessSetDisplayCount(
      parseInt(e.target.selectedOptions[0].value)
    );
    setSelected(e.target.selectedOptions[0].value);
  }
  const optionsIntervals = [15, 25, 50, 100];
  const options = optionsIntervals.map((option) => (
    <option key={uuid()} value={option}>
      {option}
    </option>
  ));
  const [selected, setSelected] = useState(options[0]);
  return (
    <select
      value={selected}
      onChange={(e) => handleDisplayCountChange(e)}
      className={"select-option"}
    >
      {options}
    </select>
  );
};

const mapStateToProps = (state) => {
  return {
    displayCount: state.adminAccessUsers.pagination.displayCount,
    resultsCount: state.adminAccessUsers.pagination.resultsCount,
    page: state.adminAccessUsers.pagination.page,
  };
};

export default connect(mapStateToProps, {
  addAdminAccessUsers,
  adminAccessSetPage,
  adminAccessSetDisplayCount,
})(PageDisplayCountList);
