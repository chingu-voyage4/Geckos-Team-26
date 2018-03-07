import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => (
  <div className="header">
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">My Pet</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/logout">Log out</Link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Header;
