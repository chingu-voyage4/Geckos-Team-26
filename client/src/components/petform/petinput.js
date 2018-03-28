import React from "react";

const PetInput = props => (
  <label>
    {props.name}
    <input
      name={props.name}
      value={props.value}
      type={props.type}
      required={props.required}
      onChange={props.onChange}
    />
  </label>
);

export default PetInput;
