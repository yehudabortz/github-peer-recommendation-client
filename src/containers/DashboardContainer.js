import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/loginUser";
import TwoColumnContentWrapper from "../components/wrappers/TwoColumnContentWrapper";
import StandardPageContentWrap from "../components/wrappers/StandardPageContentWrap";
import { useHistory } from "react-router-dom";
import SideBar from "../components/SideBar";
import MainPageContent from "../components/MainPageContent";

function DashboardContainer(props) {
  let history = useHistory();
  if (!props.auth.isLoggedIn) {
    history.push("/login");
  }
  return (
    <>
      <StandardPageContentWrap>
        <TwoColumnContentWrapper>
          <SideBar />
          <MainPageContent />
        </TwoColumnContentWrapper>
      </StandardPageContentWrap>
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
