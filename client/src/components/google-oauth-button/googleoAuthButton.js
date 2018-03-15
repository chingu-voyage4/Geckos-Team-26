import React from "react";
import { GoogleLogin } from "react-google-login";

import "./googleoAuthButton.css";

const responseGoogle = response => {
  console.log(response);
};

const GoogleoAuthButton = () => (
  <GoogleLogin
    clientId="732452823410-5c41q9209ul7k6b5kklrn4gfbcittvcd.apps.googleusercontent.com"
    // buttonText="Sign in with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    className="googleButton"
  >
    <i className="fab fa-google-plus-g" />
    <span className="google-button-text">Sign in with Google</span>
  </GoogleLogin>
);

export default GoogleoAuthButton;
