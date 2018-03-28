import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import postData from "../../utils/postData";

import clientId from "../../googleCredentials";
import "./googleoAuthButton.css";

class GoogleoAuthButton extends Component {
  constructor(props) {
    super(props);
    /* this.state = {
      redirect: false
    }; */
    this.mymethod = this.mymethod.bind(this);
  }

  mymethod(res) {
    console.log("mymethod", res);
  }

  render() {
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
        postData(payload).then(res => {
          const jsonResponse = res;
          sessionStorage.setItem("token", jsonResponse.token);
          sessionStorage.setItem("user", JSON.stringify(jsonResponse.userData));
        });
      } else {
        console.log("Failure to fetch user from google");
      }
    };

    return (
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
  }
}

export default GoogleoAuthButton;
