import React from 'react';
import css from './ButtonContainer.css';
import Button from '../Button/Button';
import PropTypes, { func } from 'prop-types';

const ButtonContainer = ({
    handlePeopleCLick,
    handlePlanetCLick,
    handleVehicleCLick,
    handleFavoritesClick

 }) => {

  return (
    <div className="button-container">
      <Button name={"People"} handleClick={ handlePeopleCLick } />
      <Button name={"Planets"}  handleClick={ handlePlanetCLick }/>
      <Button name={"Vehicles"} handleClick={ handleVehicleCLick } />
      <Button name={"Favorites"} handleClick={ handleFavoritesClick } />
    </div>
  );
}
ButtonContainer.propTypes = {
  handlePeopleCLick: func,
  handlePlanetCLick: func,
  handleVehicleCLick: func,
  handleFavoritesClick: func
}

export default ButtonContainer;
