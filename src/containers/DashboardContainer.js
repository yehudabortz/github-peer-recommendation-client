import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/loginUser";
import ContentWrapper from "../components/ContentWrapper";

class DashboardContainer extends Component {
  render() {
    return (
      <>
        <ContentWrapper />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { loginUser })(DashboardContainer);
