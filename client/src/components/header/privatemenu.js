import React from "react";
import { NavLink } from "react-router-dom";

import "./header.css";

const PrivateMenu = props => (
  <nav className="right menu">
    <NavLink
      to="/dashboard"
      activeClassName="is-active active"
      className="item"
    >
      Dashboard
    </NavLink>

    <NavLink to="/profile" activeClassName="is-active active" className="item">
      {props.username}
    </NavLink>

    <NavLink to="/logout" activeClassName="is-active active" className="item">
      Log out
    </NavLink>
  </nav>
);

export default PrivateMenu;
