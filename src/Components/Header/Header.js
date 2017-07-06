import React from 'react';
import css from './Header.css';
import PropTypes from 'prop-types';
import Favorites from '../Favorites/Favorites';
import Button from '../Button/Button'

const Header = ({ handleFavoritesClick }) =>{
  return (
    <div className="header-container">
      <h1>SWAPI_Box</h1>
      <Button handleClick={handleFavoritesClick} name="Favorites"/>
    </div>
  )
}
export default Header;
