import React from 'react'
import css from './CardContainer.css'
import Card from '../Card/Card'

const CardContainer = ( { peopleData }) => {
  let names;
  if (peopleData) {
    console.log(peopleData);
    names = peopleData.map((person, index) => {

      return <Card key={index}
                   name={person.name}
                   homeworld={person.homeworld}
                   language={person.language}
                   population={person.population}
                   species={person.species} />
    })
    // console.log(peopleData.results[0]);
  }

  return (
    <div className="card-container">
      {names}
    </div>
  )
}

export default CardContainer;
