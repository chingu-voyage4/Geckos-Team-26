import React from "react";

const PetPreview = props => (
  <div className="petPreview">
    <img src={props.petAvatar} alt="Pet avatar" />
    <p>{props.petName}</p>
  </div>
);

export default PetPreview;
