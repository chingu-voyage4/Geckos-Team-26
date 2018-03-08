import React from "react";
import { Link } from "react-router-dom";

import "./notfound.css";

const NotFound = () => (
  <div className="notfound">
    <h1>404! Page not found!</h1>
    <Link to="/">Go to the home page</Link>
  </div>
);

export default NotFound;
