import React from 'react';
import css from './Header.css';
import Button from '../Button/Button';

const Header = ({ handleFavoritesClick }) =>{
  return (
    <div className="header-container">
      <h1>SWAPI_Box</h1>
      <Button handleClick={handleFavoritesClick}
              name="Favorites"/>
    </div>
  );
}
export default Header;
