import React, { Component } from "react";
import PetInput from "./petinput";
import mock from "./mockPetForm.json";
// import "./petform.css";

// wrapper -> <form> -> <input>
// <Input type... required... name>
// [{Label:, type:, required:}]
/*eslint-disable */
class PetForm extends Component {
  constructor(props) {
    super(props);

    const inputs = mock.fields.map(el => el.name); // ['Name','Sex']
    let initialState = {};
    inputs.forEach(el => (initialState[el] = ""));
    this.state = initialState;
  }

  handleWriting(e) {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value
    });
  }

  render() {
    const petInputs = mock.fields.map(el => (
      <PetInput {...el} value={this.state[el.name]} />
    ));
    return (
      <div>
        {petInputs}
        <h1>{JSON.stringify(this.state)}</h1>
      </div>
    );
  }
}
export default PetForm;
