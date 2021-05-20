import React, { useState } from "react";
import { connect } from "react-redux";
import "../css/WrapperClasses.css";
import "../css/SettingsContent.css";
import Preference from "./Preference";
import uuid from "uuid";
const SettingsContent = (props) => {
  const preferences = props.currentUser.work_preferences;

  //   debugger;
  return (
    <div className={"width-fill-100-percent "}>
      <ul className={"preferences-wrap"}>
        <li className={"preference-item-wrap"}>
          <Preference
            prefTitle={"willing_to_relocate"}
            preference={preferences.willing_to_relocate}
          />
          <p>Willing to Relocate</p>
        </li>
        <li className={"preference-item-wrap"}>
          <Preference
            prefTitle={"open_to_remote_work"}
            preference={preferences.open_to_remote_work}
          />
          <p>Open To Remote Work</p>
        </li>
        <li className={"preference-item-wrap"}>
          <Preference
            prefTitle={"open_to_local_work"}
            preference={preferences.open_to_local_work}
          />
          <p>Open To Local Work</p>
        </li>
        <li className={"preference-item-wrap"}>
          <Preference
            prefTitle={"current_zip_code"}
            preference={preferences.current_zip_code}
          />
          <p>Current Zip Code</p>
        </li>
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(SettingsContent);
