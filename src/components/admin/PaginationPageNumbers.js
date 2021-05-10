import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import uuid from "react-uuid";
import "../../css/admin/PaginationPageNumbers.css";
import { jumpToPage } from "./paginationNavigation.js";
import { adminAccessSetPage } from "../../actions/admin/adminAccessUsers";

function PaginationPageNumbers(props) {
  function handlePageJump(e) {
    jumpToPage(props, e.target.innerText);
    console.log(e.target.innerText);
  }

  const pageNumbers = Array.from(
    { length: props.resultsPages + 1 },
    (_, i) => i + 1
  );
  const currentPage = props.page + 1;
  const numbers = pageNumbers.map((num) => (
    <span
      onClick={(e) => handlePageJump(e)}
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
export default connect(mapStateToProps, { adminAccessSetPage })(
  PaginationPageNumbers
);
