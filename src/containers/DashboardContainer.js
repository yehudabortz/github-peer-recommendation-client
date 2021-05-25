import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/loginUser";
import TwoColumnContentWrapper from "../components/wrappers/TwoColumnContentWrapper";
import StandardPageContentWrap from "../components/wrappers/StandardPageContentWrap";
import { useHistory } from "react-router-dom";
import SideBar from "../components/SideBar";
import DashboardContent from "../components/DashboardContent";
import "../css/TextClasses.css";
import uuid from "uuid";

function DashboardContainer(props) {
  let history = useHistory();
  if (!props.auth.isLoggedIn) {
    history.push("/login");
  }
  return (
    <>
      <StandardPageContentWrap>
        <TwoColumnContentWrapper>
          <SideBar
            title={[
              <span key={uuid()} className={"muted-text"}>
                Welcome <br></br>{" "}
              </span>,
              props.currentUser.user.name,
            ]}
          />
          <DashboardContent />
        </TwoColumnContentWrapper>
      </StandardPageContentWrap>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { loginUser })(DashboardContainer);
