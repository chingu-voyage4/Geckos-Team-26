import React from "react";
import Calendar from "react-input-calendar";
import "./calendar.css";

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
            key={props.name}
          />
        </label>
      </div>
    );
  }
  if (props.type === "radio") {
    const radios = props.values.map(el => (
      <label key={el}>
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
    return <div className="ui">{radios}</div>;
  }
  if (props.type === "checkbox") {
    return (
      <div>
        <label>
          {props.name}
          <input
            name={props.name}
            checked={props.value}
            type={props.type}
            required={props.required}
            onChange={props.handleCheckbox}
            key={props.name}
          />
        </label>
      </div>
    );
  }
  if (props.type === "date") {
    return (
      <Calendar
        format="DD/MM/YYYY"
        computableFormat="DD/MM/YYYY"
        date={props.value}
        onChange={props.handleDate}
        name={props.name}
      />
    );
  }
  return "default";
};

export default PetInput;
