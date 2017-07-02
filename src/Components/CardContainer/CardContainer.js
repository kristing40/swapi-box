import React from 'react'
import css from './CardContainer.css'
import Card from '../Card/Card'

const CardContainer = ( { peopleData }) => {
  return (
    <div>
      <Card peopleData={peopleData}/>
    </div>
  )
}

export default CardContainer;
