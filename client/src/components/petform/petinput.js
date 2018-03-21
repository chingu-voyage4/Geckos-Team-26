import React from "react";

const PetInput = props => (
  <label>
    {props.label}
    <input type={props.type} required={props.required} />
  </label>
);
