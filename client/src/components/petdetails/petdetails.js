import React from "react";
import { Link } from "react-router-dom";
import mockData from "./mockPetData.json";
import VaccinationCard from "./vaccinationCard";
import "./petdetails.css";

const vaccinationRecords = mockData.healthRecord.vaccination;
const medicationRecords = mockData.healthRecord.medication;

const PetDetails = () => (
  <div className="ui container">
    <div className="ui basic segment right aligned">
      <Link to="/petform">
        <img
          src={mockData.petAvatar}
          alt="Pet Avatar"
          className="ui avatar image"
        />
        Edit {mockData.petName}
      </Link>
    </div>

    <div className="pet-details-grid">
      <div className="ui card centered">
        <div className="image">
          <img src={mockData.petAvatar} alt="Pet Avatar" />
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
          {vaccinationRecords.length > 0 && (
            <div>
              <h4 className="ui horizontal divider header">Vaccinations</h4>
              {/* TODO: Make it loop through each record */}
              <VaccinationCard />
            </div>
          )}
          {medicationRecords.length > 0 && (
            <div>
              <h4 className="ui horizontal divider header">Medications</h4>
              <div className="ui cards">
                {/* TODO: Make it loop through each record */}
                <div className="card">
                  <div className="content">
                    <div className="header">{medicationRecords[0].name}</div>
                    <div className="meta">{medicationRecords[0].type}</div>
                    <div className="description">
                      <p>Dosage: {medicationRecords[0].lastGiven}</p>
                      <p>Frequency: {medicationRecords[0].frequency}</p>
                      <p>Last given on: {medicationRecords[0].lastGiven}</p>
                      <p>Other notes: {medicationRecords[0].notes}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default PetDetails;
