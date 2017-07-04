import React from 'react'
import css from './Button.css'


const Button = ({ name, handlePeopleCLick }) => {
  return (
    <div className="button-div">
      <button className="btn" onClick={ handlePeopleCLick }>{ name }</button>
    </div>
  )
}
export default Button;
