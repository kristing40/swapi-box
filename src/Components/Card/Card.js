import React from 'react';
import css from './Card.css';
import PropTypes from 'prop-types';

const Card = ({name, homeworld, language, species, population}) => {

  return (
    <div className="card">
      <p>{name}</p>
      <p>{homeworld}</p>
      <p>{language}</p>
      <p>{species}</p>
      <p>{population}</p>
    </div>
  )
}


// Name
// Homeworld
// Species
// Population of Homeworld
// A button to “Favorite” the person

export default Card;
