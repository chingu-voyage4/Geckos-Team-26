import React from "react";
import { Link } from "react-router-dom";
import PublicMenu from "./publicmenu";
import PrivateMenu from "./privatemenu";

import "./header.css";

const Header = props => (
  <header className="ui inverted menu stackable custom-header">
    <div className="header item yellow">
      <Link to="/" className="custom-yellow-header">
        <i className="paw icon custom-hide" />
        MyPet
      </Link>
    </div>
    {props.isLoggedIn ? (
      <PrivateMenu username={props.username} />
    ) : (
      <PublicMenu
        updateActiveItem={props.updateActiveItem}
        activeItem={props.activeItem}
      />
    )}
  </header>
);

export default Header;
