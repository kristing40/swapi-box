import 'whatwg-fetch';

class Vehicles {

  getVehicles(component) {
    if (component.state.vehicles.length > 0) {
      component.setState({view: 'vehicles'})
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
      component.setState({
        vehicles: cleanedVehicles,
        view: 'vehicles'
      });
    })
    .catch(error => {
      console.log(error, 'error fetching vehicles')})
    }
}

export default Vehicles;
