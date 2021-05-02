import React, { useEffect, useState } from "react";
import "../css/MainPageContent.css";
import SearchBar from "./SearchBar";
import NomiantedUserCard from "./NomiantedUserCard";
import { connect } from "react-redux";

const MainPageContent = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(props.currentUser.nominated_users);
  }, [props.currentUser]);

  return (
    <div className={"main-page-content"}>
      <SearchBar />
      {users.map((user) => (
        <NomiantedUserCard user={user} />
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
