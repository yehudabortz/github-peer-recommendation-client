import React from "react";
import "../../css/admin/UserDataCard.css";
import { connect } from "react-redux";
import "../../css/Visible.css";
import Moment from "react-moment";
import "../../css/TextClasses.css";
function UserDataCard(props) {
  function handleClick(e) {
    e.stopPropagation();
  }
  return (
    <div
      className={"user-data-card-wrap " + props.displayCard}
      onClick={(e) => handleClick(e)}
    >
      <h1>User card</h1>
      <p>
        <span className={"muted-text"}>LinkedIn Username:</span>{" "}
        {props.selectedUser.linkedin_handle}
      </p>
      <p>{props.selectedUser.name}</p>
      <p>{props.selectedUser.email}</p>
      <p>Open To Work: {props.selectedUser.open_to_work ? "✅" : "❌"}</p>
      <p>
        Member since{" "}
        <Moment format="YYYY/MM/DD" parse="YYYY-MM-DD">
          {props.selectedUser.created_at}
        </Moment>
      </p>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    selectedUser: state.adminAccessUsers.selectedUser.user,
    displayCard: state.adminAccessUsers.selectedUser.displayCard,
  };
};

export default connect(mapStateToProps)(UserDataCard);
