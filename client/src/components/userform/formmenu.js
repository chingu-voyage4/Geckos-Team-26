import React, { Component } from "react";

class FormMenu extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: "signup"
    };
    this.toggleForm = this.toggleForm.bind(this);
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
          role="button"
        >
          Signup
        </a>
        <a
          onClick={this.toggleForm}
          className={this.state.activeItem === "login" ? "item active" : "item"}
          role="button"
        >
          Login
        </a>
      </div>
    );
  }
}

export default FormMenu;
