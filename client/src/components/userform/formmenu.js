import React from "react";

const FormMenu = props => (
  <div className="ui pointing menu">
    <a
      onClick={props.handleLoginClick}
      className={props.activeItem === "login" ? "item active" : "item"}
      role="button"
    >
      Log in
    </a>
    <a
      onClick={props.handleSignupClick}
      className={props.activeItem === "signup" ? "item active" : "item"}
      role="button"
    >
      Sign up
    </a>
  </div>
);

export default FormMenu;
