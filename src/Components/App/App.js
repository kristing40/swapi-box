import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';

import Scroller from '../Scroller/Scroller'
import Header from '../Header/Header'
import ButtonContainer from '../ButtonContainer/ButtonContainer'
import InfoContainer from '../InfoContainer/InfoContainer'

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
      // fetch('http://swapi.co/api/people/')
      //   .then((response) => response.json())
      //   .then((responseData) => {
      //     this.setState({people: responseData})
      //   })
  }

  randomNumberGenerator(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  handlePeopleCLick() {

        console.log('working');
  }

  render() {
   let { scrollerText } = this.state;

    return (
      <div>
        <Scroller scrollerText={ scrollerText }/>
        <Header/>
        <ButtonContainer handlePeopleCLick={this.handlePeopleCLick}/>
        <InfoContainer/>
      </div>
    );
  }
}



export default App;
