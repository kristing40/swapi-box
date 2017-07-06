import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import Scroller from '../Scroller/Scroller'
import Header from '../Header/Header'
import ButtonContainer from '../ButtonContainer/ButtonContainer'
import CardContainer from '../CardContainer/CardContainer'

class App extends Component {
  constructor (){
    super()
    this.state = {
      scrollerText: '',
      scrollerTitle: '',
      releaseDate: '',
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      view: ''
    }
    this.handlePeopleCLick = this.handlePeopleCLick.bind(this);
    this.handlePlanetCLick = this.handlePlanetCLick.bind(this);
    this.handleVehicleCLick = this.handleVehicleCLick.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
  }

  componentDidMount() {
    const ranNum = this.randomNumberGenerator(1, 7);

    fetch('http://swapi.co/api/films/' + ranNum + '/')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({scrollerText: responseData.opening_crawl, scrollerTitle: responseData.title, releaseDate: responseData.release_date})
      });

  }

  randomNumberGenerator(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getPeopleData() {
    return fetch('http://swapi.co/api/people/')
      .then((response) => response.json())
      .then((data) => {
        const peopleArray = data.results.map(e => {
        const homeworld = fetch(e.homeworld)
          .then((response) => response.json())
          .then((planet) => ({name: planet.name, population: planet.population}))
        const species = fetch(e.species[0])
          .then((response) => response.json())
          .then((spec) => ({name: spec.name, language: spec.language}))
          return Promise.all([homeworld, species])
          .then((finalResult) => ({name: e.name, homeworld: finalResult[0].name, population: finalResult[0].population, species: finalResult[1].name, language: finalResult[1].language}))
        })
        return Promise.all(peopleArray)
      })
  }

  handlePeopleCLick(promise) {
    this.getPeopleData()
      .then((response) => {
        this.setState({
          people: response,
          view: 'people'
        })
      })
  }

getPlanetData() {
  return fetch('http://swapi.co/api/planets/')
  .then((response) => response.json())
  .then((responseData) => {
    const residentArray = responseData.results.map(planet => {
      return Promise.all(planet.residents.map(url => {
        return fetch(url)
          .then(data => data.json())
          .then(cleanData => cleanData.name)
      }))
      .then(response => ({name: planet.name, terrain: planet.terrain, climate: planet.climate, population: planet.population, residents: response}))
    })
    return Promise.all(residentArray)
  })
}

handlePlanetCLick() {
  this.getPlanetData()
    .then(planetsData => {
      this.setState({
        planets: planetsData,
        view: 'planets'
       });
    })
}

getVehicles() {
  return fetch('http://swapi.co/api/vehicles/')
  .then((response) => response.json())
  .then((vehicleResponse) => {
    const cleanedVehicles = vehicleResponse.results.map((vehicle) => {
      return ({
        name: vehicle.name,
        model:vehicle.model,
        class: vehicle.vehicle_class,
        passengers: vehicle.passengers
      })
    })
    return cleanedVehicles;
  })
  .then((cleanedVehicles) => {
    this.setState({
      vehicles: cleanedVehicles,
      view: 'vehicles'
    })
   })
  }

  handleVehicleCLick() {
    this.getVehicles();
  }

  addToFavorites(data) {
    const newFavoritesArray = Array.from(this.state.favorites);
    newFavoritesArray.push(data);
    this.setState({favorites: newFavoritesArray});
  }


  render() {

   let { scrollerText, scrollerTitle, releaseDate } = this.state;
    return (
      <div>
        <Scroller scrollerText={ scrollerText}
                  scrollerTitle={scrollerTitle}
                  releaseDate={releaseDate}
                />

        <Header/>
        <ButtonContainer handlePeopleCLick={this.handlePeopleCLick}
                         handlePlanetCLick={this.handlePlanetCLick}
                         handleVehicleCLick={this.handleVehicleCLick}
                       />
        <CardContainer peopleData={this.state.people}
                       planetData={this.state.planets}
                       view={this.state.view}
                       vehicleData={this.state.vehicles}
                       handleClick={this.addToFavorites}/>
      </div>
    );
  }
}

export default App;
