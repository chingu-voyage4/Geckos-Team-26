import React from "react";
import mockData from "./mockPetData.json";
import "./petdetails.css";

const medicationRecords = mockData.healthRecord.medication;

const MedicationCard = () => {
  const cards = medicationRecords.map(record => (
    <div className="card" key={record.name}>
      <div className="content">
        <div className="header">{record.name}</div>
        <div className="meta">{record.type}</div>
        <div className="description">
          <p>
            <span className="ui sub header">Dosage:</span> {record.dose},{" "}
            {record.frequency}
          </p>
          <p>
            <span className="ui sub header">Last given on:</span>{" "}
            {record.lastGiven}
          </p>
          <p>
            <span className="ui sub header">Other notes:</span> {record.notes}
          </p>
        </div>
      </div>
    </div>
  ));

  return <div className="ui three stackable cards">{cards}</div>;
};

export default MedicationCard;
