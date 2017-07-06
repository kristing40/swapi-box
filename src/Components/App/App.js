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
    this.handleFavoritesClick = this.handleFavoritesClick.bind(this);
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
          .then((finalResult) => ({name: e.name, homeworld: finalResult[0].name, population: finalResult[0].population, species: finalResult[1].name, language: finalResult[1].language, favorited: false}))
        })
        return Promise.all(peopleArray)
      })
  }

  handlePeopleCLick(promise) {
    if (this.state.people.length > 0) {
      this.setState({view: 'people'})
      return
    }

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
      .then(response => ({name: planet.name, terrain: planet.terrain, climate: planet.climate, population: planet.population, residents: response, favorited: false}))
    })
    return Promise.all(residentArray)
  })
}

handlePlanetCLick() {
  if (this.state.planets.length > 0) {
    this.setState({view: 'planets'})
    return
  }
  this.getPlanetData()
    .then(planetsData => {
      this.setState({
        planets: planetsData,
        view: 'planets'
       });
    })
}

getVehicles() {
  if (this.state.vehicles.length > 0) {
    this.setState({view: 'vehicles'})
    return
  }
  return fetch('http://swapi.co/api/vehicles/')
  .then((response) => response.json())
  .then((vehicleResponse) => {
    const cleanedVehicles = vehicleResponse.results.map((vehicle) => {
      return ({
        name: vehicle.name,
        model:vehicle.model,
        class: vehicle.vehicle_class,
        passengers: vehicle.passengers,
        favorited: false
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
    if (data.favorited === true) {
      data.favorited = false;
      const newFavoritesArray = this.state.favorites.filter(favorite => {
        return data.name !== favorite.name
      });
      this.setState({favorites: newFavoritesArray});
    } else {
      data.favorited = true
    }

    console.log(data);
    // this.deleteFavorites(data)
    // const newObject = Object.assign(data, {favorites: true})
    // const newFavoritesArray = Array.from(this.state.favorites);
    // newFavoritesArray.push(data);
    // this.setState({favorites: newFavoritesArray});
  }



  // deleteFavorites(data) {
  //   if (this.state.favorites.find(data).favorites) {
  //     this.state.favorites.filter(favorite => {
  //       delete data.favorites
  //       return data.name !== favorite.name
  //     })
  //   }
  // }


  handleFavoritesClick(){
    const newPeople = this.state.people.filter(person => person.favorited === true)
    const newPlanet = this.state.planets.filter(planet => planet.favorited === true)
    const newVehicles = this.state.vehicles.filter(vehicle => vehicle.favorited === true)

    console.log(newVehicles);
    console.log(newPlanet);
    console.log(newPeople);

    const newFavorites = [...newVehicles, ...newPlanet, ...newPeople]
    console.log('new favorites', newFavorites);

    this.setState({
      view: "favorites",
      favorites: newFavorites
    });
  }

  render() {

   let { scrollerText, scrollerTitle, releaseDate } = this.state;
    return (
      <div>
        <Scroller scrollerText={ scrollerText}
                  scrollerTitle={scrollerTitle}
                  releaseDate={releaseDate}
                />

        <Header handleFavoritesClick={this.handleFavoritesClick}/>
        <ButtonContainer handlePeopleCLick={this.handlePeopleCLick}
                         handlePlanetCLick={this.handlePlanetCLick}
                         handleVehicleCLick={this.handleVehicleCLick}
                       />
        <CardContainer peopleData={this.state.people}
                       planetData={this.state.planets}
                       view={this.state.view}
                       vehicleData={this.state.vehicles}
                       handleClick={this.addToFavorites}
                       favorites={this.state.favorites}/>
      </div>
    );
  }
}

export default App;
