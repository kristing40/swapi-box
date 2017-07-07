import React from 'react';
import css from './Card.css';
// import PropTypes from 'prop-types';

const Card = ({ data, addToFavorites }) => {
  let residentArray;

  if (data.residents) {
    residentArray = data.residents.map((resident, index) => {
      return (<p key={index}>{resident}</p>);
    });
  }

  return (
    <div className="card">
      <button onClick={(e) => addToFavorites(data)}>
        Favorites
      </button>
      <p>{data.name}</p>
      <p>{data.homeworld || data.terrain || data.model}</p>
      <p>{data.population || data.class}</p>
      <p>{data.language || data.climate || data.passengers}</p>
      <p>{data.species || null }</p>
      <div>{residentArray || null}</div>
    </div>
  );
}

export default Card;
