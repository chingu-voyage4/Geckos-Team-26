import React from "react";
import { GoogleLogin } from "react-google-login";

import clientId from "../../googleCredentials";
import "./googleoAuthButton.css";

const responseGoogle = response => {
  const payload = {
    accessToken: response.accessToken,
    user: {
      email: response.profileObj.email,
      imgUrl: response.profileObj.imageUrl,
      name: response.profileObj.name
    }
  };

  if (payload.accessToken) {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: `accesstoken=${payload.accessToken}&email=${
        payload.user.email
      }&imgurl=${payload.user.imgUrl}&name=${payload.user.name}`
    };
    fetch("/oauth/google", options)
      .then(res => res.json())
      .then(token => console.log(token));
  } else {
    console.log("Failure to fetch user from google");
  }
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
