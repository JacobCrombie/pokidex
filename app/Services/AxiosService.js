
// @ts-ignore
export const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 10000
})

// @ts-ignore
export const sandboxApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/jacob/pokemon/",
  timeout: 10000
})