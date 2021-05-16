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
  const [coWorkerUsers, setCoWorkerUsers] = useState([]);
  const [pastCoWorkerUsers, setPastCoWorkerUsers] = useState([]);
  const [remainingCoWorkerUsers, setRemainingCoWorkerUsers] = useState(0);
  const [remainingPastCoWorkerUsers, setRemainingPastCoWorkerUsers] =
    useState(0);
  useEffect(() => {
    // setUsers(props.currentUser.nominated_users);
    setPastCoWorkerUsers(props.currentUser.past_co_worker_nominated_users);
    setRemainingPastCoWorkerUsers(
      3 - props.currentUser.past_co_worker_nominated_users.length
    );
    setCoWorkerUsers(props.currentUser.co_worker_nominated_users);
    setRemainingCoWorkerUsers(
      3 - props.currentUser.co_worker_nominated_users.length
    );
  }, [props.currentUser.nominated_users]);

  return (
    <div className={"main-page-content"}>
      <SearchBar />
      <Divider />
      <h2 className="header-with-top-bottom-margin">Your Nominations</h2>
      <div className={"nomination-headers-wrap"}>
        <h4 className="header-with-top-bottom-margin muted-text">
          Current Co-Workers
        </h4>
        <h4 className="header-with-top-bottom-margin muted-text">
          {remainingCoWorkerUsers} Nominations Remaining
        </h4>
      </div>
      {coWorkerUsers.map((user) => (
        <NomiantedUserCard user={user || undefined} key={uuid()} />
      ))}
      {[...Array(remainingCoWorkerUsers).keys()].map((num) => (
        <NomiantedUserCard status={"inactive"} key={uuid()} />
      ))}
      <div className={"nomination-headers-wrap"}>
        <h4 className="header-with-top-bottom-margin muted-text">
          Past Co-Workers
        </h4>
        <h4 className="header-with-top-bottom-margin muted-text">
          {remainingPastCoWorkerUsers} Nominations Remaining
        </h4>
      </div>
      {pastCoWorkerUsers.map((user) => (
        <NomiantedUserCard user={user || undefined} key={uuid()} />
      ))}
      {[...Array(remainingPastCoWorkerUsers).keys()].map(() => (
        <NomiantedUserCard status={"inactive"} key={uuid()} />
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
