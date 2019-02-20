import NasaService from "./nasaService.js";
//Private

let _nasaService = new NasaService()

function drawPlanet() {

}



//public
export default class NasaController {
  constructor() {
    _nasaService.addSubscriber('apiPlanet', drawPlanet)


    //Initialize Data
    _nasaService.getPlanetData()

  }
}
