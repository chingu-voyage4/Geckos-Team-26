import React from "react";
import { Link } from "react-router-dom";
import dogImage from "./surprised-dog.png";

import "./notfound.css";

const NotFound = () => (
  <div className="notfound">
    <h1 className="ui huge header">WOOPS!</h1>
    <h3 className="ui large header">We could not find that page.</h3>
    <Link className="ui header blue" to="/">
      Do you want to go home?
    </Link>
    <img src={dogImage} alt="A surprised dog" />
  </div>
);

export default NotFound;
