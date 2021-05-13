import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../css/messages.css";
import "../css/TextClasses.css";
import "../css/Visible.css";
import "../css/Icons.css";
import { removeMessage } from "../actions/messages";

import exitIcon from "../icons/Exit-icon.svg";

function Message(props) {
  function handleClick(e) {
    props.removeMessage(e.target.parentElement.innerText);
  }

  return (
    <div className={"message"}>
      <img
        className={"exit-icon absolute"}
        src={exitIcon}
        alt="exit icon"
        onClick={(e) => handleClick(e)}
      />
      <p>{props.message}</p>
    </div>
  );
}

export default connect(null, { removeMessage })(Message);
