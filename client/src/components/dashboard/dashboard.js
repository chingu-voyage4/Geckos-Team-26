import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

const username = "Toni";
const pets = ["Morgan", "Cookie"];
const petList = pets.map(elements => <li>{elements}</li>);

const Dashboard = () => (
  <section className="dashboard">
    <h2>Welcome {username}</h2>
    <h3>Your Pets</h3>
    <ul>{petList}</ul>
    <Link to="/petform" className="addPet">
      add a pet
    </Link>
  </section>
);

export default Dashboard;
