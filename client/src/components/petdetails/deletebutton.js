import React, { Component } from "react";
import postData from "../../utils/postData";

class deleteButton extends Component {
  constructor(props) {
    super(props);
    this.deletePet = this.deletePet.bind(this);
  }

  deletePet() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const payload = this.props.id;
    const options = {
      method: "DELETE",
      headers,
      body: JSON.stringify(payload)
    };

    const postRoute = "/pets/pet";

    postData(postRoute, options).then(res => console.log(res));
  }
}

export default deleteButton;
