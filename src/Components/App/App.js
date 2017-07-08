import React, { Component } from 'react';
import './App.css';
import './normalize.css';
import 'whatwg-fetch';
import Scroller from '../Scroller/Scroller';
import Header from '../Header/Header';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import CardContainer from '../CardContainer/CardContainer';
const $ = require('jquery');

class App extends Component {
  constructor (){
    super()
    this.state = {
      scrollerText: '',
      scrollerTitle: '',
      releaseDate: '',
      view: '',
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    }
    this.handlePeopleCLick = this.handlePeopleCLick.bind(this);
    this.handlePlanetCLick = this.handlePlanetCLick.bind(this);
    this.handleVehicleCLick = this.handleVehicleCLick.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.handleFavoritesClick = this.handleFavoritesClick.bind(this);
    this.changeFavoritedImageClick = this.changeFavoritedImageClick.bind(this);
  }

  randomNumberGenerator(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  fetchScroller(randomNumber) {
    fetch('http://swapi.co/api/films/' + randomNumber + '/')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({scrollerText: responseData.opening_crawl, scrollerTitle: responseData.title, releaseDate: responseData.release_date})
      });
  }

  componentDidMount() {
    const ranNum = this.randomNumberGenerator(1, 7);
    this.fetchScroller(ranNum);
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
          .then((finalResult) => ({name: e.name, homeworld: 'Homeworld: ' + finalResult[0].name, population:'Population: ' + finalResult[0].population, species:'Species: ' + finalResult[1].name, language:'Language: ' +  finalResult[1].language, favorited: false}))
        });
        return Promise.all(peopleArray)
      })
  }

  handlePeopleCLick() {
    if (this.state.people.length > 0) {
      this.setState({view: 'people'});
      return
    }

    this.getPeopleData()
      .then((response) => {
        this.setState({
          people: response,
          view: 'people'
        });
      });
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
      .then(response => ({name: planet.name, terrain:'Terrain: ' + planet.terrain, climate:'Climate: ' + planet.climate, population:'Population: ' + planet.population, residents: response, favorited: false}))
    })
    return Promise.all(residentArray)
  })
}

handlePlanetCLick() {
  if (this.state.planets.length > 0) {
    this.setState({view: 'planets'});
    return
  }
  this.getPlanetData()
    .then(planetsData => {
      this.setState({
        planets: planetsData,
        view: 'planets'
       });
    });
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
        model: 'Vehicle: ' + vehicle.model,
        class:'Class: ' + vehicle.vehicle_class,
        passengers:'Passengers: ' + vehicle.passengers,
        favorited: false
      });
    });
    return cleanedVehicles;
  })
  .then((cleanedVehicles) => {
    this.setState({
      vehicles: cleanedVehicles,
      view: 'vehicles'
    });
  });
  }

  handleVehicleCLick() {
    this.getVehicles();
  }

  addToFavorites(data) {
    console.log(data);
    if (data.favorited === true) {
      data.favorited = false;
      const newFavoritesArray = this.state.favorites.filter(favorite => {
        return data.name !== favorite.name
      });
      this.setState({favorites: newFavoritesArray});
    } else {
      data.favorited = true;
      this.changeFavoritedImageClick();
    }
  }

  filterFavoritedHelper(favorite) {
    return favorite.favorited === true;
  }

  handleFavoritesClick() {
    const newPeople = this.state.people.filter(this.filterFavoritedHelper);
    const newPlanet = this.state.planets.filter(this.filterFavoritedHelper);
    const newVehicles = this.state.vehicles.filter(this.filterFavoritedHelper);

    const newFavorites = [
      ...newVehicles,
      ...newPlanet,
      ...newPeople
    ];

    this.setState({
      view: "favorites",
      favorites: newFavorites
    });
  }

  changeFavoritedImageClick() {
    // $(".card-unfav-btn").click(function() {
    //     $("p").toggleClass(".card-fav-btn");
    //   }
  }

  render() {
    let { scrollerText, scrollerTitle, releaseDate } = this.state;

    return (
      <div className='app-body'>
        <Scroller scrollerText={scrollerText}
                  scrollerTitle={scrollerTitle}
                  releaseDate={releaseDate} />

        <main>
          <Header/>

          <ButtonContainer handlePeopleCLick={this.handlePeopleCLick}
                           handlePlanetCLick={this.handlePlanetCLick}
                           handleVehicleCLick={this.handleVehicleCLick}
                           handleFavoritesClick={this.handleFavoritesClick} />

          <CardContainer peopleData={this.state.people}
                         planetData={this.state.planets}
                         view={this.state.view}
                         vehicleData={this.state.vehicles}
                         addToFavorites={this.addToFavorites}
                         favorites={this.state.favorites} />
        </main>
      </div>
    );
  }
}

export default App;
