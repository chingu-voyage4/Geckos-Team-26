import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.updateUser("", "", "", "");
  }

  updateUser(id, username, email, imgUrl) {
    this.props.updateUser(id, username, email, imgUrl);
  }

  render() {
    return this.props.username ? (
      <p>Log out unsuccessful, please try again.</p>
    ) : (
      <Redirect to="/" />
    );
  }
}

export default Logout;
