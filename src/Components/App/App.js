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
      people: []
    }
    this.handlePeopleCLick = this.handlePeopleCLick.bind(this);
  }

  componentDidMount() {
    const ranNum = this.randomNumberGenerator(1, 7);

    fetch('http://swapi.co/api/films/' + ranNum + '/')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({scrollerText: responseData.opening_crawl})
      })

  }

  randomNumberGenerator(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getData() {
    return fetch('http://swapi.co/api/people/')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results);
        const peopleArray = data.results.map(e => {
        const homeworld = fetch(e.homeworld)
          .then((response) => response.json())
          .then((planet) => ({name: planet.name, population:     planet.population}))
        const species = fetch(e.species[0])
          .then((response) => response.json())
          .then((spec) => ({name: spec.name, language: spec.language}))
          return Promise.all([homeworld, species])
          .then((finalResult) => ({name: e.name, homeworld: finalResult[0].name, population: finalResult[0].population, species: finalResult[1].name, language: finalResult[1].language}))
        })
        // console.log(peopleArray);
        return Promise.all(peopleArray)
      })
  }

  handlePeopleCLick(promise) {
    this.getData()
      .then((response) => {
        // console.log(response);
        this.setState({people: response})
      })
  }


  render() {
   let { scrollerText } = this.state;
    return (
      <div>
        <Scroller scrollerText={ scrollerText }/>
        <Header/>
        <ButtonContainer handlePeopleCLick={this.handlePeopleCLick}/>
        <CardContainer peopleData={this.state.people}/>
      </div>
    );
  }
}

export default App;
