import React from 'react';
import css from './Button.css';


const Button = ({ name, handleClick }) => {
  return (
    <div className="button-div">
      <button className="btn"
              onClick={ handleClick }>
        { name }
      </button>
    </div>
  );
}
export default Button;
