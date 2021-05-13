import React, { useState, useEffect } from "react";
import "../css/messages.css";
import "../css/TextClasses.css";
import "../css/Visible.css";
import "../css/Icons.css";

import exitIcon from "../icons/Exit-icon.svg";

export default function Message(props) {
  const [view, setView] = useState("show");

  function handleClick() {
    setView("hidden");
  }
  return (
    <div className={"message-wrap " + view}>
      <img
        className={"exit-icon absolute"}
        src={exitIcon}
        alt="exit icon"
        onClick={handleClick}
      />
      <p>{props.err}</p>
    </div>
  );
}
