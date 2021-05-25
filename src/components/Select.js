import "../css/Select.css";
import chevronIcon from "../icons/chevron-icon.svg";
function Select(props) {
  return (
    <div className={"select"}>
      <select onChange={props.onChange} defaultValue={props.defaultValue}>
        {props.children}
      </select>
      <img
        className={"icon select-icon "}
        src={chevronIcon}
        alt="chevron icon"
      />
    </div>
  );
}

export default Select;
