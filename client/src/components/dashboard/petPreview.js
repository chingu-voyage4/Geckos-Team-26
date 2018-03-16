import React from "react";

const PetPreview = props => (
  <div className="petPreview">
    <h4>{props.petName}</h4>
    <p>{props.species}</p>
    <p>{props.breed}</p>
  </div>
);

export default PetPreview;
