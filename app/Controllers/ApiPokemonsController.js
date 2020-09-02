import { ProxyState } from "../AppState.js";
import apiPokemonsService from "../Services/ApiPokemonsService.js";

function _drawApiPokemons(){
    let pokemons = ProxyState.apiPokemons
    let template = ''
    pokemons.forEach(s => template += `<li onclick="app.apiPokemonsController.getDetails('${s.name}')">${s.name}</li>`)
    document.getElementById('api-pokemons').innerHTML = template
}
export default class ApiPokemonsController{
  constructor(){
    ProxyState.on('apiPokemons', _drawApiPokemons)
    this.getAllApiPokemons()
  }
  getAllApiPokemons() {
    try {
      apiPokemonsService.getAll()
    } catch (error) {
      console.error(error)
    }
  }

  getDetails(name) {
    try {
      apiPokemonsService.getDetails(name)
    } catch (error) {
      console.error(error)
    }
  }
}