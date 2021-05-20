import React, { useState, useEffect } from "react";
import uuid from "uuid";
import { connect } from "react-redux";
import "../css/ToggleButton.css";
import { updateWorkPreference } from "../actions/workPreferences";

const ToggleButton = (props) => {
  const [cursor, setCursor] = useState("pointer-cursor");
  const [selected, setSelected] = useState(props.selected);
  const [toggleClass, setToggleClass] = useState("");

  function toggleSelected() {
    let pref = { [props.prefTitle]: !selected };
    if (props.selectedUser.displayCard === "hidden") {
      props.updateWorkPreference(props.currentUser, pref);
      setSelected(!selected);
    }
  }

  // debugger;
  useEffect(() => {
    if (props.selectedUser.displayCard === "show") {
      setCursor("default-cursor");
    }
    switch (selected) {
      case true:
        setToggleClass("toggle-on");
        break;
      case false:
        setToggleClass("toggle-off");
        break;
    }
  });

  return (
    <>
      <div className={"toggle-container " + cursor} onClick={toggleSelected}>
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

export default connect(mapStateToProps, { updateWorkPreference })(
  React.memo(ToggleButton)
);
