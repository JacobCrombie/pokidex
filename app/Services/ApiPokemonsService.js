import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokemonApi } from "./AxiosService.js";

class ApiPokemonsService {
  async getAll() {
    let res = await pokemonApi.get('/pokemon?limit=1050')
    ProxyState.apiPokemons = res.data.results
  }
  async getDetails(name) {
    let res = await pokemonApi.get('/pokemon/'+ name)
    ProxyState.activePokemon = new Pokemon(res.data)
    console.log(ProxyState.activePokemon)
  }
}
const apiPokemonsService = new ApiPokemonsService()
export default apiPokemonsService