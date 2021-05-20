import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import StandardPageContentWrap from "../components/wrappers/StandardPageContentWrap";
import TwoColumnContentWrapper from "../components/wrappers/TwoColumnContentWrapper";
import SideBar from "../components/SideBar";
import SettingsContent from "../components/SettingsContent";

const SettingsContainer = (props) => {
  let history = useHistory();
  if (!props.auth.isLoggedIn) {
    history.push("/login");
  }
  return (
    <StandardPageContentWrap>
      <TwoColumnContentWrapper>
        <SideBar title={[<span className={"muted-text"}>Settings</span>]} />
        <SettingsContent />
      </TwoColumnContentWrapper>
    </StandardPageContentWrap>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(SettingsContainer);
