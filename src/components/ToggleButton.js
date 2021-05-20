import React, { useState, useEffect } from "react";
import uuid from "uuid";
import { connect } from "react-redux";
import "../css/ToggleButton.css";
import { updateWorkPreference } from "../actions/workPreferences";

const ToggleButton = (props) => {
  const [selected, setSelected] = useState(props.selected);
  const [toggleClass, setToggleClass] = useState("");

  function toggleSelected() {
    let pref = { [props.prefTitle]: !selected };
    props.updateWorkPreference(props.currentUser, pref);
    setSelected(!selected);
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
  });

  return (
    <>
      <div className={"toggle-container"} onClick={toggleSelected}>
        <div className={"toggle-position-wrapper"}>
          <div className={"dialog-button " + toggleClass}>
            {/* {selected === null ? "not set" : "set"} */}
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, { updateWorkPreference })(
  React.memo(ToggleButton)
);
