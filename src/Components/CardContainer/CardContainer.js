import React from 'react'
import css from './CardContainer.css'
import Card from '../Card/Card'

const CardContainer = ( { peopleData }) => {
  let names;
  if (peopleData.results) {

    names = peopleData.results.map((person, index) => {
      return <Card key={index} name={person.name} />
    })
    console.log(peopleData.results[0]);
  }

  return (
    <div className="card-container">
      {names}
    </div>
  )
}

export default CardContainer;
