import React, { Component } from "react";
import PetInput from "./petinput";
import mock from "./mockPetForm.json";
// import "./petform.css";

// wrapper -> <form> -> <input>
// <Input type... required... name>
// [{Label:, type:, required:}]

class PetForm extends Component {
  constructor(props) {
    super(props);

    const inputs = mock.fields.map(el => el.name); // ['Name','Sex']
    const initialState = {};
    inputs.forEach(el => {
      initialState[el] = "";
    });
    this.state = initialState;

    this.handleWriting = this.handleWriting.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleWriting(e) {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const petInputs = mock.fields.map(el => (
      <PetInput
        {...el}
        value={this.state[el.name]}
        handleWriting={this.handleWriting}
      />
    ));
    return (
      <form onSubmit={this.submit}>
        {petInputs}
        <input
          className="ui fluid large yellow submit button"
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}
export default PetForm;
