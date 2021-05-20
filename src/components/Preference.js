import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../css/WrapperClasses.css";
import ToggleButton from "./ToggleButton";
const Preference = (props) => {
  return (
    <ToggleButton prefTitle={props.prefTitle} selected={props.preference} />
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(Preference);
