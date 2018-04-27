import React from "react";
import { Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import mockData from "./mockPetData.json";
import VaccinationCard from "./vaccinationCard";
import MedicationCard from "./medicationCard";
import DeleteButton from "./deletebutton";
import "./petdetails.css";

const vaccinationRecords = mockData.healthRecord.vaccination;
const medicationRecords = mockData.healthRecord.medication;

const PetDetails = props => {
  const { pet } = props.location;
  return (
    <div className="ui container">
      <div className="ui basic segment right aligned">
        <Link
          to={{
            pathname: "/petform",
            pet
          }}
        >
          <img
            src={pet.petAvatar}
            alt="Pet Avatar"
            className="ui avatar image"
          />
          Edit {pet.petName}
        </Link>
        <DeleteButton petId={pet.id} />
      </div>

      <div className="pet-details-grid">
        <div className="ui card centered">
          <div className="image">
            <img src={pet.petAvatar} alt="Pet Avatar" />
          </div>
          <div className="content">
            <div className="header">{pet.petName}</div>
            <div className="meta">
              {pet.gender} {pet.species}, {pet.breed}
            </div>
            <div className="description">
              <p>
                <span className="ui sub header">Description:</span>{" "}
                {pet.description}
              </p>
              <p>
                <span className="ui sub header">Microchip:</span>{" "}
                {mockData.microchip}
              </p>
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">Birth: {formatDate(pet.dob)}</span>
            <span>
              <i className="paw icon" />
              {pet.neutered && <span>Neutered</span>}
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
              <span className="ui sub header">Current weight: </span>
              {mockData.healthRecord.weight} {mockData.healthRecord.unit}
            </p>
            <p>
              <span className="ui sub header">Other info:</span> Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Ab iure sapiente
              necessitatibus, facere amet, velit similique, sequi blanditiis
              tempore labore voluptates, aliquid odio adipisci temporibus
              voluptatem animi eligendi est hic.
            </p>
            {vaccinationRecords.length > 0 && (
              <div>
                <h5 className="ui horizontal divider header custom-header-margin">
                  Vaccinations
                </h5>
                <VaccinationCard />
              </div>
            )}
            {medicationRecords.length > 0 && (
              <div>
                <h5 className="ui horizontal divider header custom-header-margin">
                  Medications
                </h5>
                <MedicationCard />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
