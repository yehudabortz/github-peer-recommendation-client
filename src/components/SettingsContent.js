import React, { useState } from "react";
import { connect } from "react-redux";
import "../css/WrapperClasses.css";
import "../css/SettingsContent.css";
import ToggleButton from "./ToggleButton";
import PreferenceText from "./PreferenceText";
const SettingsContent = (props) => {
  const preferences = props.currentUser.work_preference;

  return (
    <div className={"width-fill-100-percent "}>
      <ul className={"preferences-wrap"}>
        <li className={"preference-item-wrap"}>
          <ToggleButton
            prefTitle={"open_to_remote_work"}
            selected={preferences.open_to_remote_work}
          />
          <p>Open To Remote Work</p>
        </li>
        <li className={"preference-item-wrap"}>
          <ToggleButton
            prefTitle={"open_to_local_work"}
            selected={preferences.open_to_local_work}
          />
          <p>Open To Local Work</p>
        </li>
        <li className={"preference-item-wrap"}>
          <ToggleButton
            prefTitle={"open_to_targeted_jobs"}
            selected={preferences.open_to_targeted_jobs}
          />
          <p>Open To Targeted Jobs</p>
        </li>
        <li className={"preference-item-wrap"}>
          <ToggleButton
            prefTitle={"open_to_new_company"}
            selected={preferences.open_to_new_company}
          />
          <p>Open To A New Role At A New Company</p>
        </li>
        <li className={"preference-item-wrap"}>
          <ToggleButton
            prefTitle={"open_to_new_role_at_current"}
            selected={preferences.open_to_new_role_at_current}
          />
          <p>Open To A New Role At Your Current Company</p>
        </li>
        <li className={"preference-item-wrap"}>
          <ToggleButton
            prefTitle={"willing_to_relocate"}
            selected={preferences.willing_to_relocate}
          />
          <p>Willing to Relocate</p>
        </li>
        <li className={"preference-item-wrap"}>
          <PreferenceText
            prefTitle={"current_zip_code"}
            content={preferences.current_zip_code}
            placeholder={"111223"}
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
