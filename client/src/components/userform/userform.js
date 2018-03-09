// eslint-disable-next-line
import React, { Component } from "react";
import "./userform.css";

class FormMenu extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: "signup"
    };
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    let activeItem = this.state.activeItem;

    if (activeItem === "signup") {
      activeItem = "login";
    } else {
      activeItem = "signup";
    }

    this.setState({
      activeItem: activeItem
    });
    this.props.toggler();
  }

  render() {
    return (
      <div className="ui tabular menu">
        <a
          onClick={this.toggleForm}
          className={
            this.state.activeItem === "signup" ? "item active" : "item"
          }
        >
          Signup
        </a>
        <a
          onClick={this.toggleForm}
          className={this.state.activeItem === "login" ? "item active" : "item"}
        >
          Login
        </a>
      </div>
    );
  }
}

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      activeItem: "signup"
    };
    this.handleWriting = this.handleWriting.bind(this);
    this.submit = this.submit.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    let activeItem = this.state.activeItem;
    if (activeItem === "signup") {
      activeItem = "login";
    } else {
      activeItem = "signup";
    }

    this.setState({
      activeItem: activeItem
    });
  }

  handleWriting(e) {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  submit(e) {
    //todo: logic for making POST requests
    console.log(this.state);
    e.preventDefault();
  }

  render() {
    return (
      <div className="ui container raised segment">
        <FormMenu toggler={this.toggleForm} />
        <div className="ui container">
          <form className="ui form">
            <div className="field">
              <input
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleWriting}
                placeholder="Username"
              />
            </div>
            {this.state.activeItem === "signup" ? (
              <div className="field">
                <input
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleWriting}
                  placeholder="Email"
                />
              </div>
            ) : null}
            <div className="field">
              <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleWriting}
                placeholder="Password"
              />
            </div>
            <input
              className="ui button"
              type="submit"
              onClick={this.submit}
              value="Submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default UserForm;
