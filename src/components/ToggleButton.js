import React, { useState, useEffect } from "react";
import savePreference from "../services/savePreference";
import { connect } from "react-redux";
import "../css/ToggleButton.css";
import { addMessage } from "../actions/messages";
const ToggleButton = (props) => {
  const [selected, setSelected] = useState(props.selected);
  const [toggleClass, setToggleClass] = useState("");

  function toggleSelected() {
    setSelected(!selected);
    let pref = { [props.prefTitle]: !selected };
    savePreference(props.currentUser, pref).then((res) =>
      props.addMessage(res.data.message)
    );
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

export default connect(mapStateToProps, { addMessage })(ToggleButton);
