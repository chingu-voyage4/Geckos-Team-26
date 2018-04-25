/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PetPreview from "./petPreview";
import "./dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      petList: []
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.props.user.id, this.props.user.token);
  }

  fetchData(userId, token) {
    const url = `/pets/${userId}`;
    // console.log(token);
    fetch(url, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          this.setState({ redirect: true });
          throw new Error("User not authorised");
        }
        // console.log(response.json());
        return response.json();
      })
      .then(parsedJSON =>
        parsedJSON.pets.map(pet => ({
          id: pet._id,
          petName: pet.petName,
          petAvatar: pet.petAvatar,
          species: pet.species,
          breed: pet.breed,
          dob: pet.dob,
          description: pet.description,
          sex: pet.sex,
          neutered: pet.neutered
        }))
      )
      .then(petList => {
        this.setState({
          petList
        });
      })
      .catch(error => console.log("parsing failed", error));
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <section className="dashboard min-height">
        <h2>Welcome {this.props.user.username}</h2>
        <ul className="pet-list">
          {this.state.petList.length > 0 ? (
            this.state.petList.map(pet => <PetPreview key={pet.id} pet={pet} />)
          ) : (
            <li>Please click the Add Pet button to begin adding your pets.</li>
          )}
        </ul>
        <Link to="/petform" className="ui black large label add-pet-button">
          <i className="plus icon" />
          Add a Pet
        </Link>
      </section>
    );
  }
}

export default Dashboard;
