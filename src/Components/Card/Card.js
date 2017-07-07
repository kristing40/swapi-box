import React from 'react';
import css from './Card.css';
import PropTypes, { object, func } from 'prop-types';

const Card = ({ data, addToFavorites }) => {
  let residentArray;

  if (data.residents) {
    residentArray = data.residents.map((resident, index) => {
      return (<p key={index}>{resident}</p>);
    });
  }

  return (
    <div className="card">
      <button className="card-fav-btn" onClick={(e) => addToFavorites(data)}></button>
      <p className="card-name">{data.name}</p>
      <p>{data.homeworld || data.terrain || data.model}</p>
      <p>{data.population || data.class}</p>
      <p>
        {data.language || data.climate || data.passengers}
      </p>
      <p>{data.species || null }</p>
      <div>
        {data.residents ? <p>Residents: </p> : null}
        {residentArray || null}
      </div>
    </div>
  );
}

Card.propTypes = {
  data: object,
  addToFavorites: func
}
export default Card;
