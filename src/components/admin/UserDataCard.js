import React from "react";
import "../../css/admin/UserDataCard.css";
import { connect } from "react-redux";
import "../../css/Visible.css";
import Moment from "react-moment";
import "../../css/TextClasses.css";
import SettingsContent from "../SettingsContent";
import uuid from "uuid";
import exitIcon from "../../icons/Exit-icon.svg";
import { hideAdminAccessUserCard } from "../../actions/admin/adminAccessUsers";

function UserDataCard(props) {
  function handleClick(e) {
    e.stopPropagation();
    if (props.displayCard === "show") {
      props.hideAdminAccessUserCard();
    }
  }

  if (props.displayCard === "hidden") {
    return <></>;
  }
  return (
    <div
      className={"user-data-card-wrap " + props.displayCard}
      onClick={(e) => handleClick(e)}
    >
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
          {props.selectedUser.user.linkedin_handle}
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

        <p>
          Open To Work: {props.selectedUser.user.open_to_work ? "✅" : "❌"}
        </p>
        {<SettingsContent user={props.selectedUser} key={uuid()} />}
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
