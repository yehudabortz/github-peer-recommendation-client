import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import GoogleAuthLogin from "../components/GoogleAuthLogin";
import { connect } from "react-redux";
import "../css/Login.css";
import "../css/TextClasses.css";
import StandardPageContentWrap from "../components/wrappers/StandardPageContentWrap";

function LoginContainer(props) {
  let history = useHistory();
  useEffect(() => {
    if (props.auth.isLoggedIn) {
      history.push("/dashboard");
    }
  });
  return (
    <StandardPageContentWrap>
      <div className={"login-screen-wrap"}>
        <div className={"login-screen-card"}>
          <h2 className={"text-align-center"}>Welcome</h2>
          <p className={"ch-20 text-align-center muted-text font-light"}>
            Please sign in or create an account.
          </p>
          <GoogleAuthLogin />
        </div>
      </div>
    </StandardPageContentWrap>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(LoginContainer);
