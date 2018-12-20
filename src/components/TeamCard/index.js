import React from "react";
import "./style.css";

function TeamCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Established:</strong> {props.established}
          </li>
          <li>
            <strong>Super Bowl Wins:</strong> {props.superBowls}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeTeam(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default TeamCard;
