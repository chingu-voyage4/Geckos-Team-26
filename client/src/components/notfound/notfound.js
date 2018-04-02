import React from "react";
import { Link } from "react-router-dom";

import "./notfound.css";

const NotFound = () => (
  <div className="notfound">
    <h1 className="ui huge header">WOOPS!</h1>
    <h3 className="ui large header">We could not find that page.</h3>
    <Link className="ui header blue" to="/">
      Do you want to go home?
    </Link>
  </div>
);

export default NotFound;
