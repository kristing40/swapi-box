import React from 'react'
import css from './CardContainer.css'
import Card from '../Card/Card'

const CardContainer = ( { peopleData, planetData, view, vehicleData, handleClick, favorites  }) => {
  let peopleCard;
  let planetCard;
  let vehicleCard;
  let favoriteCard;
  let emptyFavorites = <h1>Choose some fav's</h1>

  if (peopleData && view === 'people') {
    peopleCard = peopleData.map((person, index) => {
      return <Card key={index}
                   data={person}
                   handleClick={handleClick} />
    })
  }
  if (planetData && view === 'planets') {
    planetCard = planetData.map((planet, index) => {
      return <Card key={index}
                   data={planet}
                   handleClick={handleClick} />
    })
  }
  if (vehicleData && view === 'vehicles') {
    vehicleCard = vehicleData.map((vehicle, index) => {
      return <Card key={index}
                   data={vehicle}
                   handleClick={handleClick} />
    })
  }

  if (favorites && view === 'favorites') {
    favoriteCard = favorites.map((favorite, index) => {
      return <Card key={index}
                   data={favorite}
                   handleClick={handleClick} />
    })
  }

  return (
    <div className="card-container">
      {peopleCard || planetCard || vehicleCard}
      {favorites.length && view === "favorites" > 0 ? favoriteCard : emptyFavorites}
    </div>
  )
}

export default CardContainer;
