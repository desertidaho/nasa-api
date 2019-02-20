export default class Planet {
  constructor(data) {
    this.url = data.url
    this.name = data.name
    this.img = data.url
    this.title = data.title
    this.date = data.date
  }

  //get names from pokemon api
  getPlanetImg() {
    return `
      <h1>${this.title}</h1>
      <h3 class="ml-5 mt-2">${this.date}</h3>
      <img class="mt-3 apod-img" src="${this.img}">
    `
  }


}
