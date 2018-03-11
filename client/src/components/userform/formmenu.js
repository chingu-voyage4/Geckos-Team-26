import React from "react";

const FormMenu = props => {
  return (
    <div className="ui tabular menu">
      <a
        onClick={props.toggler}
        className={props.activeItem === "signup" ? "item active" : "item"}
        role="button"
      >
        Signup
      </a>
      <a
        onClick={props.toggler}
        className={props.activeItem === "login" ? "item active" : "item"}
        role="button"
      >
        Login
      </a>
    </div>
  );
};

export default FormMenu;
