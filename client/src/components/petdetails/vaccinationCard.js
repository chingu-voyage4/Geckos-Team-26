import React from "react";
import mockData from "./mockPetData.json";
import "./petdetails.css";

const vaccinationRecords = mockData.healthRecord.vaccination;

const VaccinationCard = () => {
  const cards = vaccinationRecords.map(record => (
    <div className="card" key={record.name}>
      <div className="content">
        <div className="header">{record.name}</div>
        <div className="meta">{record.type}</div>
        <div className="description">
          <p>
            <span className="ui sub header">Last given on:</span>{" "}
            {record.lastGiven}
          </p>
          <p>
            <span className="ui sub header">Frequency:</span> {record.frequency}
          </p>
        </div>
      </div>
    </div>
  ));

  return <div className="ui three stackable cards">{cards}</div>;
};

export default VaccinationCard;
