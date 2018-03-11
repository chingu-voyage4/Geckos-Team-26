import React, { Component } from "react";

class FormMenu extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="ui tabular menu">
        <a
          onClick={this.props.toggler}
          className={
            this.props.activeItem === "signup" ? "item active" : "item"
          }
          role="button"
        >
          Signup
        </a>
        <a
          onClick={this.props.toggler}
          className={this.props.activeItem === "login" ? "item active" : "item"}
          role="button"
        >
          Login
        </a>
      </div>
    );
  }
}

export default FormMenu;
