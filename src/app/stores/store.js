// Libraries
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';

// Shared
import appUser from '@/app/stores/_shared/app-user';

// Setup secure ls
const ls = new SecureLS({isCompression: false});
Vue.use(Vuex)

export default new Vuex.Store({
	plugins: [
		createPersistedState({
			paths: [
				'appUser',
			],
			storage: {
				getItem: (key) => ls.get(key),
				setItem: (key, value) => ls.set(key, value),
				removeItem: (key) => ls.remove(key)
			}
		})
	],
	modules: {
		// Shared
		appUser
	}
})
