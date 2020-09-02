import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandboxApi } from "./AxiosService.js";

class MyPokemonsService{
  setActive(id) {
    ProxyState.activePokemon = ProxyState.myPokemons.find(p=> p.id == id)
  }
  async getMyPokemons() {
    let res = await sandboxApi.get('')
    ProxyState.myPokemons = res.data.data.map(p=> new Pokemon(p))
  }
  async removePokemon() {
    await sandboxApi.delete(ProxyState.activePokemon.id)
    ProxyState.myPokemons = ProxyState.myPokemons.filter(p=> p.id != ProxyState.activePokemon.id)
    ProxyState.activePokemon = null
  }
  async addPokemon() {
    let res = await sandboxApi.post('', ProxyState.activePokemon)
    ProxyState.myPokemons = [...ProxyState.myPokemons, new Pokemon(res.data.data)]
  }


}
const myPokemonsService = new MyPokemonsService()
export default myPokemonsService