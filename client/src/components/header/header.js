import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./header.css";

const Header = () => (
  <header className="header ui inverted menu">
    <nav>
      <h1>
        <Link to="/" exact>
          My Pet
        </Link>
      </h1>
      <ul>
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
      <p className="tagline">the easy way to care for your pet</p>
    </nav>
  </header>
);

export default Header;
