import React from 'react';
import css from './Card.css';
import PropTypes from 'prop-types';

const Card = ({ data }) => {
  console.log(data);
  let residentArray;
  if (data.residents) {
    residentArray = data.residents.map(resident => {
      return <p>{resident}</p>
    })
  }

  return (
    <div className="card">
      <p>{data.name}</p>
      <p>{data.homeworld || data.terrain}</p>
      <p>{data.language || data.climate}</p>
      <p>{data.species || residentArray}</p>
      <p>{data.population}</p>
    </div>
  )
}

export default Card;
