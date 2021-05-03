import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import "../css/MainPageContent.css";
import "../css/TextClasses.css";
import SearchBar from "./SearchBar";
import NomiantedUserCard from "./NomiantedUserCard";
import Divider from "./Divider";
import { connect } from "react-redux";

const MainPageContent = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(props.currentUser.nominated_users);
  }, [props.currentUser.nominated_users]);

  return (
    <div className={"main-page-content"}>
      <SearchBar />
      <Divider />
      <h4 className="header-with-top-bottom-margin">Your Nominations</h4>
      {users.map((user) => (
        <NomiantedUserCard user={user || undefined} key={uuid()} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps)(MainPageContent);
