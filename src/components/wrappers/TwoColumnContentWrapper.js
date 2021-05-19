import React from "react";
import "../../css/wrappers/TwoColumnContentWrapper.css";

export default function TwoColumnContentWrapper(props) {
  return <div className={"content-wrapper"}>{props.children}</div>;
}
