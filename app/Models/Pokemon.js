export default class Pokemon{
  constructor({_id= "", name, height, weight, base_experience, other, img, sprites}){
    this.id = _id
    this.name = name
    this.height = height
    this.weight = weight
    this.baseXp = base_experience
    this.img = img ||( sprites.front_shiny || "//placehold.it/100x100")
    if(sprites && sprites.other && sprites.other['official-artwork'] && sprites.other['official-artwork'].front_default){
      this.img = sprites.other['official-artwork'].front_default
    }
  }
  get Template(){
    return `
    <div class="card-body">
    <img class="card-img-top" src="${this.img}" alt="">
    <h4 class="card-title">${this.name}</h4>
    <p class="card-text">Height: ${this.height}ft</p>
    <p class="card-text">Weight: ${this.weight}lbs</p>
    <p class="card-text">Base XP: ${this.baseXp}</p>
    ${this.Button}
  </div>
    `
  }
  get Button(){
    if(this.id){
      return `<button onclick="app.myPokemonsController.removePokemon()" class="btn btn-danger">Remove</button>`
    }
    return `<button onclick="app.myPokemonsController.addPokemon()" class="btn btn-success">Catch Pokemon</button>`
  }
}