

// NOTE if we didn't create the data, might not be best place to start
export class Card {
  constructor(data) {
    this.name = data.name
    this.house = data.house
    this.ancestry = data.ancestry
    this.image = data.image
    this.alive = data.alive
  }


  get CardTemplate() {
    return `
<div class="col-3">
  <div class="bg-light elevation-2 rounded text-center p-3">
    <img class="img-fluid" src="${this.image}" alt="">
    <h2 class="text-primary">${this.name}</h2>
    <h4>${this.house}</h4>
    <h5>${this.ancestry}</h5>
    <p>${this.alive ? 'still kicking it' : 'kicked the goblet'}</p>
  </div>
</div>
  `
  }

}