import uuid from "uuid";
import ToggleButton from "./ToggleButton";
import PreferenceText from "./PreferenceText";
import Divider from "./Divider";
const UserPreferences = (props) => {
  return (
    <>
      <ul className={"preferences-wrap"}>
        <li className={"preference-item-wrap"}>
          <ToggleButton
            key={uuid()}
            user={props.user}
            prefTitle={"open_to_work"}
            selected={props.user.work_preference.open_to_work}
          />
          <p>Open To Work</p>
        </li>

        <li className={"preference-item-wrap"} key={uuid()}>
          <ToggleButton
            user={props.user}
            prefTitle={"open_to_remote_work"}
            selected={props.user.work_preference.open_to_remote_work}
          />
          <p>Open To Remote Work</p>
        </li>
        <li className={"preference-item-wrap"} key={uuid()}>
          <ToggleButton
            user={props.user}
            prefTitle={"open_to_local_work"}
            selected={props.user.work_preference.open_to_local_work}
          />
          <p>Open To Local Work</p>
        </li>
        <li className={"preference-item-wrap"} key={uuid()}>
          <ToggleButton
            user={props.user}
            prefTitle={"willing_to_relocate"}
            selected={props.user.work_preference.willing_to_relocate}
          />
          <p>Willing to Relocate</p>
        </li>
        <li className={"preference-item-wrap"}>
          <PreferenceText
            user={props.user}
            prefTitle={"current_zip_code"}
            content={props.user.work_preference.current_zip_code}
            placeholder={"111223"}
            inputStyle={"text-align-center"}
          />
          <p>Current Zip Code</p>
        </li>
      </ul>
    </>
  );
};

export default UserPreferences;
