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
      <div className="ui small circular">
        <img
          className="ui small circular image"
          src={props.pet.petAvatar}
          alt="Pet avatar"
        />
      </div>
      <p className="ui small header">{props.pet.petName}</p>
    </li>
  </Link>
);

export default PetPreview;
