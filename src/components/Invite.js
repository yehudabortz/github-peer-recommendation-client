import { connect } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import MainButton from "./MainButton";
import Divider from "./Divider";
import StandardGridWrap from "./wrappers/StandardGridWrap";
import { addMessage } from "../actions/messages";
import {
  createAndReturnInviteLink,
  updatedOutboundInviteToken,
  clearOutboundInviteToken,
} from "../actions/outboundInvitations";
import "../css/SearchBar.css";
import "../css/TextClasses.css";
import "../css/Invite.css";

const Invite = (props) => {
  const [copyButtonText, setCopyButtonText] = useState("Copy Invite Link");
  const [buttonText, setButtonText] = useState("Save Invite");
  const [inputText, setInputText] = useState("");
  function handleClick() {
    props.createAndReturnInviteLink(inputText).then((res) => {
      if (res.data.message) {
        props.addMessage(res.data.message);
      } else {
        setInputText("");
        setTimeout(() => props.updatedOutboundInviteToken(res.data), 1000);
        setButtonText("Saved");
      }
    });
  }
  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function handleCopy() {
    setTimeout(() => props.clearOutboundInviteToken(), 1000);
    setCopyButtonText("Copied");
    setButtonText("Save Invite");
  }
  return (
    <StandardGridWrap>
      <h2 className={"header-with-top-bottom-margin"}>Invite A Friend</h2>

      <input
        className="search-bar"
        type="text"
        value={inputText}
        onChange={(e) => handleInputChange(e)}
        placeholder={"LinkedIn Profile URL"}
      />

      {props.currentUser.outbound_invitations.outbound_invite_token === "" ? (
        <MainButton text={buttonText} onClick={handleClick} theme={"dark"} />
      ) : (
        ""
      )}
      {props.currentUser.outbound_invitations.outbound_invite_token !== "" ? (
        <CopyToClipboard
          text={
            window.hostName +
            "/invites?invite_token=" +
            props.currentUser.outbound_invitations.outbound_invite_token
          }
        >
          <MainButton text={copyButtonText} onClick={handleCopy} />
        </CopyToClipboard>
      ) : (
        ""
      )}
      <Divider />
    </StandardGridWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, {
  createAndReturnInviteLink,
  updatedOutboundInviteToken,
  clearOutboundInviteToken,
  addMessage,
})(Invite);
