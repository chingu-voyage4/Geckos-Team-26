import React from "react";
import { Link } from "react-router-dom";
import PublicMenu from "./publicmenu";
import PrivateMenu from "./privatemenu";

import "./header.css";

const Header = props => (
  <header className="ui inverted menu stackable">
    <div className="header item yellow">
      <Link to="/" className="custom-yellow-header">
        <i className="paw icon custom-hide" />
        MyPet
      </Link>
    </div>
    {props.redirectOnLogin ? (
      <PrivateMenu username={props.username} />
    ) : (
      <PublicMenu />
    )}
  </header>
);

export default Header;
