import React from 'react';
import css from './Card.css';
import PropTypes from 'prop-types';

const Card = ({ data, handleClick }) => {
  let residentArray;
  if (data.residents) {
    residentArray = data.residents.map((resident, index) => {
      return <p key={index}>{resident}</p>
    })
  }
  // TODO: refactor!!!
  return (
    <div className="card">
      <button onClick={(e) => handleClick(data)}>Favorties</button>
      <p>{data.name}</p>
      <p>{data.homeworld || data.terrain || data.model}</p>
      <p>{data.language || data.climate || data.class}</p>
      <p>{data.species || null }</p>
      <div>{residentArray || null}</div>
      <p>{data.population || data.passengers}</p>
    </div>
  )
}

export default Card;
