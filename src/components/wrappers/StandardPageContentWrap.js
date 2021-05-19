import React from "react";
import "../../css/wrappers/StandardPageContentWrap.css";

const StandardPageContentWrap = (props) => {
  return (
    <div className={"standard-page-content-wrapper"}>{props.children}</div>
  );
};

export default StandardPageContentWrap;
