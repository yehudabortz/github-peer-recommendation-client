import React, { useState, useEffect } from "react";
import Message from "./Message";
import uuid from "uuid";

import { connect } from "react-redux";
import "../css/messages.css";

function MessagesWrap(props) {
  const [hasMessages, setHasMessages] = useState(false);
  const [view, setView] = useState("hidden");

  useEffect(() => {
    if (props.messages.length > 0) {
      setHasMessages(true);
      setView("show");
    } else {
      setHasMessages(false);
      setView("hidden");
    }
  }, [props]);

  return (
    <div className={"messages-wrap " + view}>
      {props.messages.map((msg) => (
        <Message message={msg} key={uuid()} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages.messages,
  };
};

export default connect(mapStateToProps)(MessagesWrap);
