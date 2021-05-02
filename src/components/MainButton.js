import React from "react";
import "../css/MainButton.css";

const MainButton = (props) => {
  return (
    <button
      onClick={props.handleClick}
      className={`main-button ${props.theme}`}
    >
      {props.text}
    </button>
  );
};

export default MainButton;
