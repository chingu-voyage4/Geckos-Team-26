import React from "react";
import { NavLink } from "react-router-dom";

import "./header.css";

const PublicMenu = () => (
  <nav className="right menu">
    <NavLink to="/login" activeClassName="is-active active" className="item">
      Log in
    </NavLink>

    <NavLink to="/signup" activeClassName="is-active active" className="item">
      Sign up
    </NavLink>
  </nav>
);

export default PublicMenu;
