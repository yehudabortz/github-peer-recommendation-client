import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import StandardPageContentWrap from "../components/wrappers/StandardPageContentWrap";
import TwoColumnContentWrapper from "../components/wrappers/TwoColumnContentWrapper";
import SideBar from "../components/SideBar";
import SettingsContent from "../components/SettingsContent";
import uuid from "uuid";

const SettingsContainer = (props) => {
  let history = useHistory();
  if (!props.auth.isLoggedIn) {
    history.push("/login");
  }
  return (
    <StandardPageContentWrap>
      <TwoColumnContentWrapper>
        <SideBar
          title={[
            <span key={uuid()} className={"muted-text"}>
              Settings
            </span>,
          ]}
        />
        <SettingsContent user={props.currentUser} />
      </TwoColumnContentWrapper>
    </StandardPageContentWrap>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(SettingsContainer);
