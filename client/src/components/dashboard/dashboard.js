import React from "react";
import { Link } from "react-router-dom";
import PetPreview from "./petPreview";
import "./dashboard.css";
import mockData from "./mockData.json";

const username = "Toni";

const Dashboard = () => (
  <section className="dashboard">
    <h2>Welcome {username}</h2>
    <h3>Your Pets</h3>
    <PetPreview {...mockData.pets[0]} />
    <PetPreview {...mockData.pets[1]} />
    <Link to="/petform" className="addPet">
      add a pet
    </Link>
  </section>
);

export default Dashboard;
