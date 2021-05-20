import React from "react";
import Message from "./Message";
import uuid from "uuid";

import { connect } from "react-redux";
import "../css/messages.css";

function MessagesWrap(props) {
  const filteredMessages = props.messages.filter(function (m) {
    return m != null;
  });
  if (
    filteredMessages.filter(function (m) {
      return m != null;
    }).length === 0
  ) {
    return <></>;
  }

  return (
    <div className={"messages-wrap"}>
      {filteredMessages.map((msg) => (
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
