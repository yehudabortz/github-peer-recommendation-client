import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { postGoogleLogin } from "../actions/postGoogleLogin";
import "../css/MainButton.css";

const GoogleAuthLogin = (props) => {
  function onSuccess(response) {
    props.postGoogleLogin(response);
  }
  function onFailure() {
    console.log("Failure");
  }
  return (
    <div>
      <GoogleLogin
        render={(renderProps) => (
          <button
            className="main-button"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Sign In With Google
          </button>
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
