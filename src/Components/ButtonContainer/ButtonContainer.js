import React from 'react'
import css from './ButtonContainer.css'
import Button from '../Button/Button'


const ButtonContainer = ( { handlePeopleCLick, handlePlanetCLick, handleVehicleCLick } ) => {
  return (
    <div className="button-container">
      <Button name="People" handleClick={ handlePeopleCLick } />
      <Button name="Planets"  handleClick={ handlePlanetCLick }/>
      <Button name="Vehicles" handleClick={ handleVehicleCLick } />
    </div>
  )
}

export default ButtonContainer;
