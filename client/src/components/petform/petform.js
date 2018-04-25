import React, { Component } from "react";
import PetInput from "./petinput";
import petFormFields from "./petForm.json";
import mapKeysToPetSchema from "../../utils/mapKeysToPetSchema";
import mapPetSchemaToKeys from "../../utils/mapPetSchemaToKeys";
import formatDate from "../../utils/formatDate";
import postData from "../../utils/postData";

// import "./petform.css";

class PetForm extends Component {
  constructor(props) {
    super(props);

    const inputs = petFormFields.fields.map(el => el.name);
    const initialState = {};
    inputs.forEach(el => {
      initialState[el] = "";
    });
    this.state = { pet: initialState };
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleWriting = this.handleWriting.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    if (this.props.location.pet) {
      const pet = mapPetSchemaToKeys(this.props.location.pet);
      pet["Born"] = formatDate(pet["Born"]); //format date from ISO to dd/mm/yyyy
      this.setState({
        pet: { ...this.state.pet, ...pet }
      });
    }
  }

  handleWriting(e) {
    const { name } = e.target;
    this.setState({
      pet: { ...this.state.pet, [name]: e.target.value }
    });
  }

  handleCheckbox(e) {
    const { name } = e.target;
    const checked = Boolean(this.state.pet[name]);
    this.setState({
      pet: { ...this.state.pet, [name]: !checked }
    });
  }

  handleDate(d) {
    this.setState({
      pet: { ...this.state.pet, Born: d }
    });
  }

  submit(e) {
    e.preventDefault();

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const payload = mapKeysToPetSchema(this.state);
    payload.owner = this.props.user.id;

    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(payload)
    };

    const postRoute = "/pets/pet";

    postData(postRoute, options).then(res => console.log(res));
  }

  render() {
    const petInputs = petFormFields.fields.map(el => (
      <PetInput
        key={el.name}
        {...el}
        value={this.state.pet[el.name]}
        handleWriting={this.handleWriting}
        handleCheckbox={this.handleCheckbox}
        handleDate={this.handleDate}
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
