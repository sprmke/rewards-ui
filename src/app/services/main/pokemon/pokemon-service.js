import PokemonAPI from '@/app/apis/main/pokemon/pokemon-api.js';

export default {
    /**
    * @returns {object} pokemon list
    */
    async getPokemonList() {
        return PokemonAPI.getPokemonList();
    },

    /**
    * @return {object} pokemon details
    */
	async getPokemonDetails(pokemonName) {
        return PokemonAPI.getPokemonDetails(pokemonName);
	}
}