import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./header.css";

const Header = props => (
  <header className="ui inverted menu stackable">
    <div className="header item yellow">
      <Link to="/" className="custom-yellow-header">
        <i className="paw icon custom-hide" />
        MyPet
      </Link>
    </div>
    {props.username ? (
      <nav className="right menu">
        <NavLink
          to="/dashboard"
          activeClassName="is-active active"
          className="item"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/profile"
          activeClassName="is-active active"
          className="item"
        >
          {props.username}
        </NavLink>
        <NavLink
          to="/logout"
          activeClassName="is-active active"
          className="item"
        >
          Log out
        </NavLink>
      </nav>
    ) : (
      <nav className="right menu">
        <NavLink
          to="/login"
          activeClassName="is-active active"
          className="item"
        >
          Log in
        </NavLink>
        <NavLink
          to="/signup"
          activeClassName="is-active active"
          className="item"
        >
          Sign up
        </NavLink>
      </nav>
    )}
  </header>
);

export default Header;
