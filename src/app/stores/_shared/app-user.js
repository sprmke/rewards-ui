// Router
import router from '@/app/routes/router.js';

// Constants
// import { TOKEN } from '@/app/constants/app-constants';

const appUser = {
	state: {
		userToken: null,
		userDetails: {}
	},
	mutations: {
		setUserToken(state, userToken) {
			state.userToken = userToken;
		},
		setUserDetails(state, userDetails) {
			state.userDetails = {...userDetails};
		},
		clearUserDetails(state) {
			state.userDetails = {};
		},
		clearUserToken(state) {
			state.userToken = null;
		}
	},
	actions: {
		logout({commit}) {
			// remove user details when JWT expires.
			commit('clearUserDetails');
			commit('clearUserToken');

			router.push('/login');
		},
		initializeLogoutTimer({dispatch}) {
			// kills the running instance of set timeout if the user logs in again.
			clearTimeout();

			setTimeout(() => {
				dispatch('logout');
			}, TOKEN.EXPIRY);
		}
	},
	getters: {
		getUserToken(state) {
			return state.userToken;
		},
		getUserDetails(state) {
			return state.userDetails;
		}
	}
};

export default appUser;