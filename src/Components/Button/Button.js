import React from 'react';
import css from './Button.css';
import PropTypes, { string, func } from 'prop-types';



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
