import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      redirect: false
    };
    this.deletePet = this.deletePet.bind(this);
    this.toggleConfirm = this.toggleConfirm.bind(this);
  }

  deletePet() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const payload = {
      id: this.props.petId
    };
    
    const options = {
      method: "DELETE",
      headers,
      body: JSON.stringify(payload)
    };

    const postRoute = "/pets/pet";

    fetch(postRoute, options).then(response => {
      if (response.status === 200) {
        this.setState({ redirect: true });
      }
    });
  }

  toggleConfirm() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/dashboard" />;
    }
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
