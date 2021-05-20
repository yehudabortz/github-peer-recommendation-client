import "../css/ToggleButton.css";
import "../css/PreferenceText.css";
import { connect } from "react-redux";
import { updateWorkPreference } from "../actions/workPreferences";
function PreferenceText(props) {
  function handleChange(e) {
    let pref = { [props.prefTitle]: e.target.value };
    props.updateWorkPreference(props.currentUser, pref);
  }
  return (
    <input
      className={"toggle-container preference-text"}
      type="text"
      placeholder={props.placeholder}
      value={props.content}
      onChange={(e) => handleChange(e)}
    />
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
