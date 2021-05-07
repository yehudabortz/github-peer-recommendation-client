import React from "react";
import "../../css/admin/UserDataCard.css";
import { connect } from "react-redux";
import "../../css/Visible.css";
function UserDataCard(props) {
  return (
    <div className={"user-data-card-wrap " + props.displayCard}>
      <h1>User card</h1>
      <h3>{props.selectedUser.name}</h3>
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
