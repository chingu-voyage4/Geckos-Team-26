import React, { Component } from "react";

class deleteButton extends Component {
  constructor(props) {
    super(props);
    this.deletePet = this.deletePet.bind(this);
  }

  deletePet() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const options = {
      method: "DELETE",
      headers
    };

    fetch();
  }
}
