// Instance
import MainAPI from '@/app/apis/main/main-api.js';

// Endpoints
import { API, ENDPOINTS } from '@/app/apis/main/_connection/connection-api.js';

class PokemonAPI extends MainAPI {
    /**
    * @return {object} pokemon list
    */
    async getPokemonList() {
        return API.get(ENDPOINTS.GET_POKEMON_LIST);
	}

    /**
    * @return {object} pokemon details
    */
	async getPokemonDetails() {
		return API.get(ENDPOINTS.GET_POKEMON_DETAILS);
	}
}

export default new PokemonAPI();
