import React from 'react'
import css from './ButtonContainer.css'
import Button from '../Button/Button'


const ButtonContainer = ( { handlePeopleCLick } ) => {
  return (
    <div className="button-container">
      <Button name="People" handlePeopleCLick={ handlePeopleCLick } />
      <Button name="Planets" />
      <Button name="Vehicles" />
    </div>
  )
}

export default ButtonContainer;
