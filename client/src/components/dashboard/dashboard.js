import React from "react";
import { Link } from "react-router-dom";
import PetPreview from "./petPreview";
import mockData from "./mockData.json";
import "./dashboard.css";

const username = "Toni";

const Dashboard = () => (
  <section className="dashboard">
    <h2>Welcome {username}</h2>
    <PetPreview {...mockData.pets[0]} />
    <PetPreview {...mockData.pets[1]} />
    <Link to="/petform" className="addPet">
      add a pet
    </Link>
  </section>
);

export default Dashboard;
