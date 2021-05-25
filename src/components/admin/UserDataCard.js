import React from "react";
import { useHistory } from "react-router-dom";
import "../../css/admin/UserDataCard.css";
import { connect } from "react-redux";
import "../../css/Visible.css";
import Moment from "react-moment";
import "../../css/TextClasses.css";
import UserPreferences from "../UserPreferences";
import uuid from "uuid";
import exitIcon from "../../icons/Exit-icon.svg";
import { hideAdminAccessUserCard } from "../../actions/admin/adminAccessUsers";
import { createLinkedInUrl } from "../../services/handleLinkedInUrls";

import { CopyToClipboard } from "react-copy-to-clipboard";

function UserDataCard(props) {
  function handleClick(e) {
    if (props.displayCard === "show") {
      props.hideAdminAccessUserCard();
      e.stopPropagation();
    }
  }

  if (props.displayCard === "hidden") {
    return <></>;
  }
  return (
    <div className={"user-data-card-wrap " + props.displayCard}>
      <img
        className={"icon absolute"}
        src={exitIcon}
        alt="exit icon"
        onClick={(e) => handleClick(e)}
      />
      <div className={"user-card-profile-bio-wrap"}>
        <h1>{props.selectedUser.user.name}</h1>
        <p>
          <span className={"muted-text"}>LinkedIn Username:</span>{" "}
          <a
            href={createLinkedInUrl(props.selectedUser.user.linkedin_handle)}
            target="_blank"
          >
            {props.selectedUser.user.linkedin_handle}
          </a>
        </p>
        <p>
          <span className={"muted-text"}>Email:</span>{" "}
          {props.selectedUser.user.email}
        </p>

        <p>
          <span className={"muted-text"}> Member since:</span>{" "}
          <Moment format="YYYY/MM/DD" parse="YYYY-MM-DD">
            {props.selectedUser.user.created_at}
          </Moment>
        </p>
        {!props.selectedUser.user.email ? (
          <CopyToClipboard
            text={
              window.hostName +
              "/invites?invite_token=" +
              props.selectedUser.invite_token
            }
          >
            <p className={"link"}>Copy Invite Link</p>
          </CopyToClipboard>
        ) : (
          ""
        )}
        <UserPreferences user={props.selectedUser} />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    selectedUser: state.adminAccessUsers.selectedUser.user,
    displayCard: state.adminAccessUsers.selectedUser.displayCard,
  };
};

export default connect(mapStateToProps, { hideAdminAccessUserCard })(
  UserDataCard
);
