import React from "react";
import { GoogleLogin } from "react-google-login";

import clientId from "../../googleCredentials";
import "./googleoAuthButton.css";

const responseGoogle = response => {
  console.log(response);
};

const GoogleoAuthButton = () => (
  <GoogleLogin
    clientId={clientId}
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    className="googleButton"
  >
    <i className="fab fa-google-plus-g" />
    <span className="google-button-text">Sign in with Google</span>
  </GoogleLogin>
);

export default GoogleoAuthButton;
