import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

const PetPreview = props => (
  <Link
    to={{
      pathname: "/petdetails",
      pet: props.pet
    }}
  >
    <li className="pet-preview">
      <img
        className="ui small circular image"
        src={props.pet.petAvatar}
        alt="Pet avatar"
      />
      <p className="ui small header">{props.pet.petName}</p>
    </li>
  </Link>
);

export default PetPreview;
