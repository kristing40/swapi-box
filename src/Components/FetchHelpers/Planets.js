import 'whatwg-fetch';

class Planets {

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
    .catch(error => {
      console.log(error, 'error fetching planets')})
  }
}

export default Planets;
