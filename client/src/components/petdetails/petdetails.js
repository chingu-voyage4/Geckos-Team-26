import React from "react";
import { Link } from "react-router-dom";
import mockData from "./mockPetData.json";
import "./petdetails.css";
const PetDetails = () => (
  <div className="ui container">
    <div className="ui basic segment right aligned">
      <Link to="/petform">
        <img src={mockData.petAvatar} className="ui avatar image" />
        Edit {mockData.petName}
      </Link>
    </div>

    <div className="pet-details-grid">
      <div className="ui card centered">
        <div className="image">
          <img src={mockData.petAvatar} />
        </div>
        <div className="content">
          <div className="header">{mockData.petName}</div>
          <div className="meta">
            {mockData.gender} {mockData.species}, {mockData.breed}
          </div>
          <div className="description">
            <p>Description: {mockData.description}</p>
            <p>Microchip: {mockData.microchip}</p>
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">Birth: {mockData.birthDate}</span>
          <span>
            <i className="paw icon" />
            {mockData.neutered && <span>Neutered</span>}
          </span>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <h4 className="ui horizontal divider header">
            <i className="heartbeat icon" />
            Health Records
          </h4>
          <p>
            Current weight: {mockData.healthRecord.weight}{" "}
            {mockData.healthRecord.unit}
          </p>
          <p>
            Other info: Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Ab iure sapiente necessitatibus, facere amet, velit similique,
            sequi blanditiis tempore labore voluptates, aliquid odio adipisci
            temporibus voluptatem animi eligendi est hic.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default PetDetails;
