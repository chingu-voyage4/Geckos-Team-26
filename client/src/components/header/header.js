import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./header.css";

const Header = () => (
  <header className="ui inverted menu segment">
    <div className="ui container">
      <div className="header item yellow">
        <Link to="/" className="custom-yellow-header">
          <i className="paw icon custom-hide" />
          MyPet
        </Link>
      </div>
      <nav className="right item">
        <div className="ui secondary inverted pointing menu">
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
          <NavLink
            to="/logout"
            activeClassName="is-active active"
            className="item"
          >
            Log out
          </NavLink>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
