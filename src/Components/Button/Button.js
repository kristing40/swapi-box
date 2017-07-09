import React from 'react';
import './Button.css';
import { string, func } from 'prop-types';



const Button = ({ name, handleClick }) => {
  return (
      <button className="btn"
              onClick={ handleClick }>

        { name }

      </button>
  );
}

Button.propTypes = {
  name: string,
  handleClick: func
};

export default Button;
