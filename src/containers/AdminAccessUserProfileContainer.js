import { connect } from "react-redux";
import React from "react";

import TwoColumnContentWrapper from "../components/wrappers/TwoColumnContentWrapper";
import StandardPageContentWrap from "../components/wrappers/StandardPageContentWrap";
import { useHistory } from "react-router-dom";
import SideBar from "../components/SideBar";
import UserDataCard from "../components/admin/UserDataCard";
import "../css/TextClasses.css";
import uuid from "uuid";

function AdminAccessUserProfileContainer(props) {
  let history = useHistory();
  if (!props.auth.isLoggedIn) {
    history.push("/login");
  }
  return (
    <>
      <StandardPageContentWrap>
        <TwoColumnContentWrapper>User Profile Page</TwoColumnContentWrapper>
      </StandardPageContentWrap>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(AdminAccessUserProfileContainer);
