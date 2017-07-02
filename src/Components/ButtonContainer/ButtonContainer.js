import React from 'react'
import css from './ButtonContainer.css'
import Button from '../Button/Button'


const ButtonContainer = () => {
  return (
    <div>
      <Button name="People" />
      <Button name="Planets" />
      <Button name="Vehicles" />
    </div>
  )
}

export default ButtonContainer;
