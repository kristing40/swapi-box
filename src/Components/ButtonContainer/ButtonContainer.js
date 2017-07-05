import React from 'react'
import css from './ButtonContainer.css'
import Button from '../Button/Button'


const ButtonContainer = ( { handlePeopleCLick, handlePlanetCLick } ) => {
  return (
    <div className="button-container">
      <Button name="People" handlClick={ handlePeopleCLick } />
      <Button name="Planets"  handleClick={ handlePlanetCLick }/>
      <Button name="Vehicles" />
    </div>
  )
}

export default ButtonContainer;
