import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/loginUser";
import ContentWrapper from "../components/ContentWrapper";
import { useHistory } from "react-router-dom";

function DashboardContainer(props) {
  let history = useHistory();
  if (!props.auth.isLoggedIn) {
    history.push("/login");
  }
  return (
    <>
      <ContentWrapper />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { loginUser })(DashboardContainer);
