import React, { useState, useEffect } from "react";
import "../css/messages.css";
import "../css/TextClasses.css";
import "../css/Visible.css";

export default function Message(props) {
  const [view, setView] = useState("show");

  function handleClick() {
    setView("hidden");
  }
  return (
    <div className={"message-wrap " + view} onClick={handleClick}>
      <p>{props.err}</p>
    </div>
  );
}
