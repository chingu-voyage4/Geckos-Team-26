import React from "react";
import { Link } from "react-router-dom";
import PetPreview from "./petPreview";
import mockData from "./mockData.json";
import "./dashboard.css";

const username = "Toni";

const Dashboard = () => (
  <section className="dashboard min-height">
    <h2>Welcome {username}</h2>
    <div className="pet-list">
      <PetPreview {...mockData.pets[0]} />
      <PetPreview {...mockData.pets[1]} />
    </div>
    <Link to="/petform" className="ui black large label add-pet-button">
      <i className="plus icon" />
      Add a Pet
    </Link>
  </section>
);

export default Dashboard;
