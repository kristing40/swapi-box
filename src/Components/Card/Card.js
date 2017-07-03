import React from 'react';
import css from './Card.css';
import PropTypes from 'prop-types';

const Card = ({name}) => {

  return (
    <div className="card">
      <p>{name}</p>
    </div>
  )
}


// Name
// Homeworld
// Species
// Population of Homeworld
// A button to “Favorite” the person

export default Card;
