import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { postGoogleLogin } from "../actions/postGoogleLogin";
import "../css/MainButton.css";
import "../css/Icons.css";
import GoogleIcon from "../icons/google-icon.svg";

const GoogleAuthLogin = (props) => {
  let history = useHistory();
  let inviteToken = "";
  if (history.location.pathname === "/invites") {
    inviteToken = history.location.search.split("?invite_token=")[1];
  }
  function onSuccess(response) {
    props.postGoogleLogin(response, inviteToken);
  }
  function onFailure() {
    console.log("Failure");
  }
  return (
    <div>
      <GoogleLogin
        render={(renderProps) => (
          <div
            className="main-button dark with-icon"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <img
              src={GoogleIcon}
              alt="Login with Google Icon"
              className={"icon margin-right"}
            />
            Sign In With Google
          </div>
        )}
        clientId={window.googleClientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
};

export default connect(null, { postGoogleLogin })(GoogleAuthLogin);
