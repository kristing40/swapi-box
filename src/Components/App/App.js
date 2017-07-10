import React, { Component } from 'react';
import './App.css';
import './normalize.css';
import 'whatwg-fetch';
import Scroller from '../Scroller/Scroller';
import Header from '../Header/Header';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import CardContainer from '../CardContainer/CardContainer';
import { randomNumberGenerator } from '../../AppHelpers.js';
import Vehicles from '../FetchHelpers/Vehicles'
import Planets from '../FetchHelpers/Planets'

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
  }


  fetchScroller(randomNumber) {
    fetch('http://swapi.co/api/films/' + randomNumber + '/')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({scrollerText: responseData.opening_crawl, scrollerTitle: responseData.title, releaseDate: responseData.release_date})
      }).catch(error => {
          console.log(error, 'error fetching vehicles')})
  }

  componentDidMount() {
    const ranNum = randomNumberGenerator(1, 7);
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
      }).catch(error => {
          console.log(error, 'error fetching people')})
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

handlePlanetCLick() {
  if (this.state.planets.length > 0) {
    this.setState({view: 'planets'});
    return
  }
  new Planets().getPlanetData()
    .then(planetsData => {
      this.setState({
        planets: planetsData,
        view: 'planets'
      })
    });
}

  handleVehicleCLick() {
    new Vehicles().getVehicles(this);
  }

  addToFavorites(data) {
    if (data.favorited === true) {
      data.favorited = false;
      const newFavoritesArray = this.state.favorites.filter(favorite => {
        return data.name !== favorite.name
      });
      this.setState({favorites: newFavoritesArray});
    } else {
      data.favorited = true;
      const newFavoritesArray = Array.from(this.state.favorites);
      newFavoritesArray.push(data);
      this.setState({favorites: newFavoritesArray});
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
