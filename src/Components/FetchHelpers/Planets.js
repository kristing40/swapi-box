import 'whatwg-fetch';

class Planets {
//
  getPlanetData() {
    return fetch('http://swapi.co/api/planets/')
    .then((response) => response.json())
    .then((responseData) => this.getResPromises(responseData))
    .catch(error => {
      console.log(error, 'error fetching planets')})
  }

  getResPromises(data) {
    const residentArray = data.results.map(planet => {
      return Promise.all(planet.residents.map(url => {
        return fetch(url)
          .then(data => data.json())
          .then(cleanData => cleanData.name)
      }))
      .then(response => (this.cleanAllData(response, planet)));
    })
    return Promise.all(residentArray)
  }

  cleanAllData(data, planet) {
    return {
      name: planet.name,
      terrain:'Terrain: ' + planet.terrain,
       climate:'Climate: ' + planet.climate,
       population:'Population: ' + planet.population,
       residents: data,
       favorited: false
     }
  }


}


export default Planets;
