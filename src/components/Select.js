import "../css/Select.css";
function Select(props) {
  return (
    <div className={"select"}>
      <select onChange={props.onChange} defaultValue={props.defaultValue}>
        {props.children}
      </select>
    </div>
  );
}

export default Select;
