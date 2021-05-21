import React from "react";
import "../css/MainButton.css";

const MainButton = (props) => {
  return (
    <button
      onClick={props.handleClick}
      className={`main-button ${props.theme}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default MainButton;
