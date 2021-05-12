import React from "react";
import "../css/errorMessages.css";
import "../css/TextClasses.css";

export default function ErrorMessage(props) {
  return (
    <div className={"message-wrap"}>
      <p>{props.err}</p>
    </div>
  );
}
