import React from "react";
import { NavLink } from "react-router-dom";

import "./header.css";

const Header = () => (
  <header className="header">
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="is-active" exact={true}>
            My Pet
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="is-active">
            Log in
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClassName="is-active">
            Sign up
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout" activeClassName="is-active">
            Log out
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
