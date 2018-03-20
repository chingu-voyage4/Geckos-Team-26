import React from "react";
import "./dashboard.css";

const PetPreview = props => (
  <div className="pet-preview">
    <img
      className="ui small circular image"
      src={props.petAvatar}
      alt="Pet avatar"
    />
    <p className="ui small header">{props.petName}</p>
  </div>
);

export default PetPreview;