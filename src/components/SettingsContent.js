import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import "../css/WrapperClasses.css";
import "../css/SettingsContent.css";
import "../css/TextClasses.css";
import ToggleButton from "./ToggleButton";
import PreferenceText from "./PreferenceText";
import Divider from "./Divider";
import uuid from "uuid";
import UserPreferences from "./UserPreferences";
const SettingsContent = (props) => {
  return (
    <>
      <div className={"width-fill-100-percent "}>
        <ul className={"preferences-wrap"}>
          <li className={"preference-item-wrap"}>
            <ToggleButton
              user={props.currentUser}
              prefTitle={"open_to_work"}
              selected={props.currentUser.work_preference.open_to_work}
            />
            <p>Open To Work</p>
          </li>
        </ul>
        {props.currentUser.work_preference.open_to_work ? <Divider /> : ""}
        {props.currentUser.work_preference.open_to_work ? (
          <ul className={"preferences-wrap"}>
            <li className={"preference-item-wrap"} key={uuid}>
              <ToggleButton
                user={props.currentUser}
                prefTitle={"open_to_remote_work"}
                selected={props.currentUser.work_preference.open_to_remote_work}
              />
              <p>Open To Remote Work</p>
            </li>
            <li className={"preference-item-wrap"}>
              <ToggleButton
                user={props.currentUser}
                prefTitle={"open_to_local_work"}
                selected={props.currentUser.work_preference.open_to_local_work}
              />
              <p>Open To Local Work</p>
            </li>
            <li className={"preference-item-wrap"}>
              <ToggleButton
                user={props.currentUser}
                prefTitle={"willing_to_relocate"}
                selected={props.currentUser.work_preference.willing_to_relocate}
              />
              <p>Willing to Relocate</p>
            </li>
            <li className={"preference-item-wrap"}>
              <PreferenceText
                user={props.currentUser}
                prefTitle={"current_zip_code"}
                content={props.currentUser.work_preference.current_zip_code}
                placeholder={"111223"}
                inputStyle={"text-align-center"}
              />
              <p>Current Zip Code</p>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    selectedUser: state.adminAccessUsers.selectedUser,
  };
};

export default connect(mapStateToProps)(SettingsContent);
