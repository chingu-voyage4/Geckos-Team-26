import React, { Component } from "react";
import PetInput from "./petinput";
import mock from "./mockPetForm.json";
// import "./petform.css";

class PetForm extends Component {
  constructor(props) {
    super(props);

    const inputs = mock.fields.map(el => el.name);
    const initialState = {};
    inputs.forEach(el => {
      initialState[el] = "";
    });
    this.state = initialState;
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleWriting = this.handleWriting.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleWriting(e) {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value
    });
    console.log(e.target);
  }

  handleCheckbox(e) {
    const { name } = e.target;
    const checked = Boolean(this.state[name]);
    this.setState({
      [name]: !checked
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
        handleCheckbox={this.handleCheckbox}
      />
    ));
    return (
      <div className="ui middle aligned center aligned grid custom-display-form">
        <div className="column">
          <form onSubmit={this.submit} className="ui large form" id="petForm">
            <div className="ui stacked segment">{petInputs}</div>
            <input
              className="ui fluid large yellow submit button"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default PetForm;
