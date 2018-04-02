import React from "react";
import { Link } from "react-router-dom";
import dogImage from "./surprised-dog.png";

import "./notfound.css";

const NotFound = () => (
  <div className="notfound min-height">
    <h1 className="ui huge header">OOPS!</h1>
    <h3 className="ui large header">I ate the page you&apos;re looking for.</h3>
    <Link className="ui header blue" to="/">
      Are we going home now?
    </Link>
    <img src={dogImage} alt="A surprised dog" />
  </div>
);

export default NotFound;
