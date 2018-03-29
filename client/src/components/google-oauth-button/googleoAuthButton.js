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
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: `accesstoken=${payload.accessToken}&email=${
          payload.user.email
        }&imgurl=${payload.user.imgUrl}&name=${payload.user.name}`
      };

      if (payload.accessToken) {
        postData(options).then(res => {
          const jsonResponse = res;
          this.props.updateUser(jsonResponse.userData);
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
