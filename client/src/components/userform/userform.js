// eslint-disable-next-line
import React, { Component } from "react";
import FormMenu from "./formmenu";
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
    this.toggleForm = this.toggleForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeItem: nextProps.activeItem
    });
  }

  toggleForm() {
    let { activeItem } = this.state;
    if (activeItem === "signup") {
      activeItem = "login";
    } else {
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
    //  todo: logic for making POST requests

    console.log(this.state);
    e.preventDefault();

    const data = this.state;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(data)
    };

    fetch("http://localhost:3000/auth/signup", options).then(res =>
      console.log(res)
    );
  }

  render() {
    return (
      <div className="ui middle aligned center aligned grid custom-display-form">
        <div className="column">
          <h2 className="ui black header">
            {this.state.activeItem === "signup" ? "Sign up" : "Log in"}
          </h2>
          <FormMenu
            toggler={this.toggleForm}
            activeItem={this.state.activeItem}
          />
          <form className="ui large form">
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
                    />
                  </div>
                </div>
              ) : null}
              <input
                className="ui fluid large yellow submit button"
                type="submit"
                onClick={this.submit}
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserForm;
