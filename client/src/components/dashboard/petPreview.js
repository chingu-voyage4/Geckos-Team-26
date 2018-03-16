import React from "react";

const PetPreview = props => (
  <div className="petPreview">
    <img src={props.petAvatarURL} alt="Pet avatar" />
    <p>{props.petName}</p>
  </div>
);

export default PetPreview;
