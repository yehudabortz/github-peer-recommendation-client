import "../../css/wrappers/StandardGridWrap.css";
const StandardGridWrap = (props) => {
  return <div className={"standard-grid-wrapper"}>{props.children}</div>;
};

export default StandardGridWrap;
