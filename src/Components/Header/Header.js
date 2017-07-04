import React from 'react';
import css from './Header.css';
import PropTypes from 'prop-types';
import Favorites from '../Favorites/Favorites';

const Header = () =>{
  return (
    <div className="header-container">
      <h1>SWAPI Box!!!</h1>
      <Favorites />
    </div>
  )
}
export default Header;
