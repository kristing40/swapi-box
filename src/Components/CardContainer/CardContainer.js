import React from 'react'
import css from './CardContainer.css'
import Card from '../Card/Card'

const CardContainer = ( { peopleData, planetData, view }) => {
  let peopleCard;
  let planetCard

  if (peopleData && view === 'people') {
    peopleCard = peopleData.map((person, index) => {
      return <Card key={index}
                   data={person} />
    })
  }
  else if (planetData && view === 'planets') {
    // console.log(planetData);
    planetCard = planetData.map((planet, index) => {
      return <Card key={index}
                   data={planet} />
    })
  }

  return (
    <div className="card-container">
      {peopleCard || planetCard}
    </div>
  )
}

export default CardContainer;
