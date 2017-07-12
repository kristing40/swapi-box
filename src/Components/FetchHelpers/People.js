import 'whatwg-fetch';

class People {
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
}
export default People;

//use backticks
