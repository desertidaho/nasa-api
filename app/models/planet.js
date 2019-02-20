export default class Planet {
  constructor(data) {
    this.url = data.url
    this.name = data.name
  }

  //get names from pokemon api
  getPlanetList() {
    return `
  <button class="btn bt-sm btn-outline-dark shadow mt-2" onclick="app.controllers.planetController.makeCard('${this.name}')">${this.name}</button>
    `
  }


}
