import React, { useState } from "react";
import { connect } from "react-redux";
import "../css/WrapperClasses.css";
import Preference from "./Preference";
import uuid from "react-uuid";
const SettingsContent = (props) => {
  const preferences = props.currentUser.work_preferences;

  //   debugger;
  return (
    <div className={"width-fill-100-percent"}>
      <ul>
        <li key={uuid()}>
          <p>Willing to Relocate</p>
          <Preference
            prefTitle={"willing_to_relocate"}
            preference={preferences.willing_to_relocate}
          />
        </li>
        <li key={uuid()}>
          <p>Open To Remote Work</p>
          <Preference
            prefTitle={"open_to_remote_work"}
            preference={preferences.open_to_remote_work}
          />
        </li>
        <li key={uuid()}>
          <p>Open To Local Work</p>
          <Preference
            prefTitle={"open_to_local_work"}
            preference={preferences.open_to_local_work}
          />
        </li>
        <li key={uuid()}>
          <p>Current Zip Code</p>
          <Preference
            prefTitle={"current_zip_code"}
            preference={preferences.current_zip_code}
          />
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
