import React from 'react'
import css from './CardContainer.css'
import Card from '../Card/Card'

const CardContainer = ( { peopleData, planetData, view, vehicleData  }) => {
  let peopleCard;
  let planetCard;
  let vehicleCard;

  if (peopleData && view === 'people') {
    peopleCard = peopleData.map((person, index) => {
      return <Card key={index}
                   data={person} />
    })
  }
  if (planetData && view === 'planets') {
    planetCard = planetData.map((planet, index) => {
      return <Card key={index}
                   data={planet} />
    })
  }
  if (vehicleData && view === 'vehicles') {
    vehicleCard = vehicleData.map((vehicle, index) => {
      return <Card key={index}
                   data={vehicle} />
    })
  }

  return (
    <div className="card-container">
      {peopleCard || planetCard || vehicleCard}
    </div>
  )
}

export default CardContainer;
