import React, { useState, useEffect } from "react";
import Message from "./Message";
import uuid from "uuid";

import { connect } from "react-redux";
import "../css/messages.css";

function MessagesWrap(props) {
  if (props.messages.length === 0) {
    return <></>;
  }
  return (
    <div className={"messages-wrap"}>
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
