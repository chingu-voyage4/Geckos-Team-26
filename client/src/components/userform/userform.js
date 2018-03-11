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
  }

  render() {
    return (
      <div className="ui container raised segment">
        <FormMenu
          toggler={this.toggleForm}
          activeItem={this.state.activeItem}
        />
        <div className="ui container">
          <form className="ui form">
            {this.state.activeItem === "signup" ? (
              <div className="field">
                <input
                  name="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.handleWriting}
                  placeholder="Username"
                />
              </div>
            ) : null}
            <div className="field">
              <input
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleWriting}
                placeholder="Email"
              />
            </div>
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
