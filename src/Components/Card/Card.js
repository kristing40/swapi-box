import React from 'react';
import './Card.css';
import { object, func } from 'prop-types';
import { addKey } from '../../AppHelpers.js'

const Card = ({ data, addToFavorites }) => {

  const cardArray = Object.keys(data).slice(1).map(cardKey => {
    if (data.residents && cardKey === 'residents') {
      const residentArray = data[cardKey].map(resident => {
        return <p key={addKey()}>{resident}</p>
      });

      return (<div key={addKey()}>
                <p>Residents:</p>
                {residentArray}
              </div>);
    }
    return <p key={addKey()}>{data[cardKey]}</p>
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
