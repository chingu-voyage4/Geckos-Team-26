import React from "react";

const PetInput = props => {
  if (props.type === "text") {
    return (
      <div className="field">
        <label>
          {props.name}
          <input
            name={props.name}
            value={props.value}
            type={props.type}
            required={props.required}
            onChange={props.handleWriting}
          />
        </label>
      </div>
    );
  }
  if (props.type === "radio") {
    const radios = props.values.map(el => (
      <label>
        {el}
        <input
          name={props.name}
          value={el}
          checked={props.value === el}
          type={props.type}
          required={props.required}
          onChange={props.handleWriting}
        />
      </label>
    ));
    return radios;
  }
  return "default";
};

export default PetInput;
