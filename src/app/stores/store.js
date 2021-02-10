// Libraries
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';

// Shared
import user from '@/app/stores/_shared/user';
import auth from '@/app/stores/_shared/auth';

// Setup secure ls
const ls = new SecureLS({isCompression: false});
Vue.use(Vuex)

export default new Vuex.Store({
	plugins: [
		createPersistedState({
			paths: [
				'user',
				'auth'
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
		user,
		auth
	}
})
