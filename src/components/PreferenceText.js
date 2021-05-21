import "../css/ToggleButton.css";
import "../css/PreferenceText.css";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { updateWorkPreference } from "../actions/workPreferences";
function PreferenceText(props) {
  const [text, setText] = useState(props.content);

  function handleChange(e) {
    setText(e.target.value);
    let pref = { [props.prefTitle]: e.target.value };
    props.updateWorkPreference(props.currentUser, pref);
  }
  return (
    <>
      <input
        className={`toggle-container ${props.inputStyle} ${props.width}`}
        type="text"
        placeholder={props.placeholder}
        value={text}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, { updateWorkPreference })(
  PreferenceText
);
