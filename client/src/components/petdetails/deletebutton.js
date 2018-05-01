import React, { Component } from "react";
import postData from "../../utils/postData";

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.deletePet = this.deletePet.bind(this);
    this.toggleConfirm = this.toggleConfirm.bind(this);
  }

  deletePet() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const payload = this.props.petId;
    const options = {
      method: "DELETE",
      headers,
      body: JSON.stringify(payload)
    };

    const postRoute = "/pets/pet";

    postData(postRoute, options).then(res => console.log(res));
  }

  toggleConfirm() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleConfirm}>Delete</button>
        {this.state.visible ? (
          <button onClick={this.deletePet}>Confirm</button>
        ) : null}
      </div>
    );
  }
}

export default DeleteButton;
