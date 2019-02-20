import Planet from "../models/planet.js";
//Private

//provide controlls to GET/POST/PUT/DELETE
let _planetAPI = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=gf9ajHd9ctQeo5yvuuV9ZcaDEhfG2ErphX8PDQCw'
})

let _state = {
  apiPlanet: []
}

let _subscribers = {
  apiPlanet: []
}

function setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}

//public
export default class PlanetService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get ApiPlanet() {
    return _state.apiPlanet.map(p => new Planet(p))
  }

  //GET DATA
  getPlanetData() {
    _planetAPI.get()
      .then(res => {
        let data = res.data.results.map(d => new Planet(d)) //change this!!!!!
        setState('apiPlanet', data)
      })
      .catch(err => {
        console.error(err)
      })
  }


}
