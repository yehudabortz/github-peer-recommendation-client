import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import uuid from "uuid";
import { connect } from "react-redux";
import "../css/ToggleButton.css";
import {
  updateWorkPreference,
  updateSelectedUserWorkPreference,
} from "../actions/workPreferences";

const ToggleButton = (props) => {
  let history = useHistory();
  const [selected, setSelected] = useState(props.selected);
  const [toggleClass, setToggleClass] = useState("");

  function toggleSelected() {
    let pref = { [props.prefTitle]: !selected };
    if (!history.location.pathname.includes("admin")) {
      props.updateWorkPreference(props.user, pref);
      setSelected(!selected);
    } else {
      props.updateSelectedUserWorkPreference(props.user, pref);
      setSelected(!selected);
    }
  }

  useEffect(() => {
    switch (selected) {
      case true:
        setToggleClass("toggle-on");
        break;
      case false:
        setToggleClass("toggle-off");
        break;
    }
  }, [selected, toggleClass]);

  return (
    <>
      <div
        className={"toggle-container pointer-cursor"}
        onClick={toggleSelected}
      >
        <div className={"toggle-position-wrapper"}>
          <div className={"dialog-button " + toggleClass}></div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    adminAccessUsers: state.adminAccessUsers,
    selectedUser: state.adminAccessUsers.selectedUser,
  };
};

export default connect(mapStateToProps, {
  updateWorkPreference,
  updateSelectedUserWorkPreference,
  // })(ToggleButton);
})(React.memo(ToggleButton));
