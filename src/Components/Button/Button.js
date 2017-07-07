import React from 'react';
import css from './Button.css';
import PropTypes, { string, func } from 'prop-types';



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

Button.propTypes = {
  name: string,
  handleClick: func
}

export default Button;
