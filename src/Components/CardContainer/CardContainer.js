import React from 'react';
import css from './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = ({ peopleData,
                         planetData,
                         vehicleData,
                         favorites,
                         view,
                         addToFavorites }) => {

  let peopleCard;
  let planetCard;
  let vehicleCard;
  let favoriteCard;

  const mapCardsCallback = (cardData, index) => {
    return (
      <Card key={index}
            data={cardData}
            addToFavorites={addToFavorites} />
    );
  }

  if (peopleData && view === 'people') {
    peopleCard = peopleData.map(mapCardsCallback);
  }

  if (peopleData && view === 'people') {
    peopleCard = peopleData.map(mapCardsCallback);
  }
  if (planetData && view === 'planets') {
    planetCard = planetData.map(mapCardsCallback);
  }
  if (vehicleData && view === 'vehicles') {
    vehicleCard = vehicleData.map(mapCardsCallback);
  }
  if (favorites && view === 'favorites') {
    favoriteCard = favorites.map(mapCardsCallback);
  }

  if (favorites.length === 0
      && view === 'favorites') {

    return (
      <div className='card-container'>
        <h1 className="favorites-empty">
          Choose Favorites you must, Yung-Padewon.
        </h1>
      </div>
    );
  }

  return (
    <div className="card-container">
      {  peopleCard ||
         planetCard ||
        vehicleCard ||
        favoriteCard }
    </div>
  );
}

export default CardContainer;
