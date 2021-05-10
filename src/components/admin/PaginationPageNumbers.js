import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import uuid from "react-uuid";
import "../../css/admin/PaginationPageNumbers.css";

function PaginationPageNumbers(props) {
  const pageNumbers = Array.from(
    { length: props.resultsPages + 1 },
    (_, i) => i + 1
  );

  const currentPage = props.page + 1;

  const numbers = pageNumbers.map((num) => (
    <span
      className={
        num == currentPage ? "page-number current-page" : "page-number"
      }
      key={uuid()}
    >
      {num}
    </span>
  ));
  return <div className={"page-numbers-wrap"}>{numbers}</div>;
}

const mapStateToProps = (state) => {
  return {
    page: state.adminAccessUsers.pagination.page,
    resultsPages: state.adminAccessUsers.pagination.resultsPages,
  };
};
export default connect(mapStateToProps)(PaginationPageNumbers);
