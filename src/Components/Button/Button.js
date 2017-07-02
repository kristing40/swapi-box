import React from 'react'
import css from './Button.css'


const Button = ({ name, handlePeopleCLick }) => {
  return (
    <div>
      <button onClick={ handlePeopleCLick }>{ name }</button>
    </div>
  )
}
export default Button;
