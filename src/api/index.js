import axios from "axios"

const APIURL = `https://pokeapi.co/api/v2/pokemon?limit=151`

export const getPokemons = () => {
  return axios.get(APIURL)
  .then((res) => res.data.results)
  .catch((err) => console.log(err))
}

export const getPokemonDetails = (pokemon) => {
  return axios.get(pokemon.url)
  .then(res => res.data)
  .catch((err) => console.log(err))
}