import React from "react";
import { connect } from "react-redux";
import StandardPageContentWrap from "../components/wrappers/StandardPageContentWrap";
import TwoColumnContentWrapper from "../components/wrappers/TwoColumnContentWrapper";
import SideBar from "../components/SideBar";
import SettingsContent from "../components/SettingsContent";

const SettingsContainer = (props) => {
  return (
    <StandardPageContentWrap>
      <TwoColumnContentWrapper>
        <SideBar title={[<span className={"muted-text"}>Settings</span>]} />
        <SettingsContent />
      </TwoColumnContentWrapper>
    </StandardPageContentWrap>
  );
};

export default connect(null)(SettingsContainer);
