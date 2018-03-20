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
          <p>Last given on: {record.lastGiven}</p>
          <p>Frequency reminder: {record.frequency}</p>
        </div>
      </div>
    </div>
  ));

  return <div className="ui cards">{cards}</div>;
};

export default VaccinationCard;
