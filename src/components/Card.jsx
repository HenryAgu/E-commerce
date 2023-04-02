import React from 'react';

// stylesheet
import '../scss/Card.css';

// components
import CardText from './CardText';
import CardImage from "./CardImage";

const Card = () => {
  return (
    <div>
        <CardImage/>
        <CardText/>
    </div>
  )
}

export default Card