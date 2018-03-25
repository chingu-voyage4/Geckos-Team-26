import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateUser({});
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
