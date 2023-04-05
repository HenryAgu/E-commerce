import React from "react";

// stylesheet
import "../scss/Card.css";
// components
import CardText from "./CardText";
import CardImage from "./CardImage";

const Card = () => {
  return (
    <div className="card">
      <div className="card_container">
        <CardImage />
          <CardText />
      </div>
    </div>
  );
};

export default Card;
