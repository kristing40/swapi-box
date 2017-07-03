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

  handlePeopleCLick() {
    Promise.all([
    fetch('http://swapi.co/api/people/'),
    fetch('http://swapi.co/api/planets/1/')
    ])
      // fetch('http://swapi.co/api/people/')
      .then((response) => response.json())
      .then((responseData) => {

        let peopleData = responseData[0].responseData;
        let planetData = responseData[1].responseData;

        this.setState({people: responseData})
      })

      // .then((responseData) => {
      //   const promiseArray = [];
      //   responseData.results.forEach(e => {
      //     const promises = getData(responseData.results.homeworld);
      //     promiseArray.push(promises)
      //   }
      //   return promiseArray
      // })
      // .Promise.all(promiseArray)

      // .then((data) => {
      //   const peopleArray = this.state.people.results
      //   for(let i = 0; i > peopleArray[i].length; i++) {
      //     fetch(`'${peopleArray.results[i].homeworld}'`)
      //     .then(homeworldData => console.log(homeworldData))
      //     .catch((error) => console.log('error', error))
      //   }
      // });
}

  getData(url) {
    fetch(url)
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
