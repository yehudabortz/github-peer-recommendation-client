import "../css/ToggleButton.css";
import "../css/PreferenceText.css";
import { connect } from "react-redux";
import { useState } from "react";
import {
  updateWorkPreference,
  updateSelectedUserWorkPreference,
} from "../actions/workPreferences";
function PreferenceText(props) {
  const [text, setText] = useState(props.content);

  function handleChange(e) {
    setText(e.target.value);
    let pref = { [props.prefTitle]: e.target.value };
    if (props.selectedUser.displayCard === "hidden") {
      props.updateWorkPreference(props.user, pref);
    } else {
      props.updateSelectedUserWorkPreference(props.user, pref);
    }
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
    selectedUser: state.adminAccessUsers.selectedUser,
  };
};

export default connect(mapStateToProps, {
  updateWorkPreference,
  updateSelectedUserWorkPreference,
})(PreferenceText);
