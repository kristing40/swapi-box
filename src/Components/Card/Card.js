import React from 'react';
import css from './Card.css';
import PropTypes, { object, func } from 'prop-types';

const Card = ({ data, addToFavorites }) => {
  const cardArray = Object.keys(data).map((cardKey, index) => {
    if (data.residents && cardKey === 'residents') {
      const residentArray = data[cardKey].map((resident, index) => {
        return <p key={index}>{resident}</p>
      });

      return (<div key={index}>
                <p>Residents:</p>
                {residentArray}
              </div>);
    }
    return <p key={index}>{data[cardKey]}</p>
  })

  const addFavClass = (data) => {
    return data.favorited === true ? 'card-fav-btn' : 'card-unfav-btn';
  }

  return (
    <div className="card">
      <button className={addFavClass(data)} onClick={(e) =>
          addToFavorites(data)}></button>
      <p className="card-name">{data.name}</p>
      {cardArray}
    </div>
  )
}
Card.propTypes = {
  data: object,
  addToFavorites: func
}
export default Card;
