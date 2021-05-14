import React from "react";
import { useHistory } from "react-router-dom";
import GoogleAuthLogin from "../components/GoogleAuthLogin";
import { connect } from "react-redux";
import "../css/Login.css";

function LoginContainer(props) {
  let history = useHistory();
  if (props.auth.isLoggedIn) {
    history.push("/dashboard");
  }
  return (
    <div className={"login-screen-wrap"}>
      <div className={"login-screen-card"}>
        <GoogleAuthLogin />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(LoginContainer);
