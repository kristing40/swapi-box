import React from 'react';
import css from './Header.css';
import PropTypes from 'prop-types';
import Favorites from '../Favorites/Favorites';

const Header = () =>{
  return (
    <div>
      <h1>Swapi Box!!!</h1>
      <Favorites />
    </div>
  )
}
export default Header;
