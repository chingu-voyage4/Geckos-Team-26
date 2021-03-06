// eslint-disable-next-line
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import FormMenu from "./formmenu";
import GoogleLogin from "./googleoAuthButton";
import validateSignUp from "../../utils/validateUserInput";
import postData from "../../utils/postData";
import login from "../../utils/login";
import "./userform.css";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordVerify: "",
      activeItem: props.activeItem
    };
    this.handleWriting = this.handleWriting.bind(this);
    this.submit = this.submit.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeItem: nextProps.activeItem
    });
  }

  handleLoginClick() {
    let { activeItem } = this.state;
    if (activeItem === "signup") {
      activeItem = "login";
    }
    this.setState({
      activeItem
    });
  }

  handleSignupClick() {
    let { activeItem } = this.state;
    if (activeItem === "login") {
      activeItem = "signup";
    }
    this.setState({
      activeItem
    });
  }

  handleWriting(e) {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();
    const { activeItem, ...data } = this.state;

    if (activeItem === "signup") {
      // When a user submits the signup form
      const isValid = validateSignUp(data);
      if (isValid !== "valid") {
        console.log(isValid);
        return;
      }

      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      const options = {
        method: "POST",
        headers,
        body: JSON.stringify(data)
      };
      const postRoute = "/auth/signup";

      postData(postRoute, options)
        .then(res => {
          if (res.token) {
            login(res, this.props);
          }
        })
        .catch(error => console.log(error));
    } else {
      // When a user submits the login form
      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      const { username, passwordVerify, ...loginData } = data;
      const options = {
        method: "POST",
        headers,
        body: JSON.stringify(loginData)
      };
      const postRoute = "/auth/login";

      postData(postRoute, options)
        .then(res => {
          if (res.token) {
            login(res, this.props);
          }
        })
        .catch(error => console.log(error));
    }
  }

  render() {
    return this.props.isLoggedIn ? (
      <Redirect to="/dashboard" />
    ) : (
      <div className="ui middle aligned center aligned grid custom-display-form min-height">
        <div className="column">
          <h2 className="ui black header">
            {this.state.activeItem === "signup" ? "Sign up" : "Log in"}
          </h2>
          <FormMenu
            handleLoginClick={this.handleLoginClick}
            handleSignupClick={this.handleSignupClick}
            activeItem={this.state.activeItem}
          />
          <form onSubmit={this.submit} className="ui large form" id="userForm">
            <div className="ui stacked segment">
              {this.state.activeItem === "signup" ? (
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon" />
                    <input
                      name="username"
                      type="text"
                      value={this.state.username}
                      onChange={this.handleWriting}
                      placeholder="Username"
                      minLength="3"
                      required
                    />
                  </div>
                </div>
              ) : null}
              <div className="field">
                <div className="ui left icon input">
                  <i className="at icon" />
                  <input
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleWriting}
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon" />
                  <input
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleWriting}
                    placeholder="Password"
                    minLength="8"
                    required
                  />
                </div>
              </div>
              {this.state.activeItem === "signup" ? (
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon" />
                    <input
                      name="passwordVerify"
                      type="password"
                      value={this.state.passwordVerify}
                      onChange={this.handleWriting}
                      placeholder="Verify password"
                      minLength="8"
                      required
                    />
                  </div>
                </div>
              ) : null}
              <input
                className="ui fluid large yellow submit button"
                type="submit"
                value="Submit"
              />
            </div>
            <GoogleLogin
              updateUser={this.props.updateUser}
              updateIsLoggedIn={this.props.updateIsLoggedIn}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default UserForm;
