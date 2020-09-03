import { ProxyState } from "../AppState.js";
import myPokemonsService from "../Services/MyPokemonsService.js";

function _drawActivePokemon() {
  let elem = document.getElementById("active-pokemon")
  if (ProxyState.activePokemon) {
    elem.innerHTML = ProxyState.activePokemon.Template
  } else {
    elem.innerHTML = ""
  }

}
function _drawMyPokemons() {
  let pokemons = ProxyState.myPokemons
  let template = ''
  pokemons.forEach(s => template += `<li class="text-color-yel" onclick="app.myPokemonsController.setActive('${s.id}')">${s.name}</li>`)
  document.getElementById('my-pokemons').innerHTML = template
}

export default class MyPokemonsController {
  constructor() {
    ProxyState.on('activePokemon', _drawActivePokemon)
    ProxyState.on('myPokemons', _drawMyPokemons)
    this.getMyPokemons()
  }
  getMyPokemons() {
    try {
      myPokemonsService.getMyPokemons()
    } catch (error) {
      console.error(error);
    }
  }
  addPokemon() {
    try {
      myPokemonsService.addPokemon()
    } catch (error) {
      console.error(error);
    }
  }
  removePokemon() {
    try {
      myPokemonsService.removePokemon()
    } catch (error) {
      console.error(error);
    }
  }

  setActive(id) {
    try {
      myPokemonsService.setActive(id)
    } catch (error) {
      console.error(error);
    }
  }
}