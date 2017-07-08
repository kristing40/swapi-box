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

  const addFavClass = (data) => {
    return data.favorited === true ? 'card-fav-btn' : 'card-unfav-btn';
  }

  return (
    <div className="card">
      <button className={addFavClass(data)} onClick={(e) =>
          addToFavorites(data)}></button>
      <p className="card-name">{data.name}</p>
      <p className="card-category">{data.homeworld || data.terrain || data.model}</p>
      <p className="card-category">{data.population || data.class}</p>
      <p className="card-category">
        {data.language || data.climate || data.passengers}
      </p>
      <p className="card-category">{data.species || null }</p>
      <div>
        {data.residents ? <p className="card-category">Residents: </p> : null}
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
