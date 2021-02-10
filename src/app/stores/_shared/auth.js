// Router
import router from '@/app/routes/router.js';

const auth = {
	state: {
    authData: {
      token: null,
      userId: null,
      expiresIn: null
    },
    authStatus: {
      message: null,
      status: null
    }
	},
	mutations: {
		setAuthData(state, authData) {
      state.authData = authData;
    },
    clearAuthData(state) {
      state.authData = {
				token: null,
				userId: null,
				expiresIn: null
			};
    },
    setAuthStatus(state, authStatus) {
      state.authStatus = authStatus;
    },
    clearAuthStatus(state) {
      state.authStatus = {
				message: null,
				status: null
			};
    }
	},
	actions: {
		logout({ commit }) {
			// reset auth data and user data
			commit('clearAuthData');
			commit('clearUserData');

			// prevent redirect to same page to avoid console error
			if (router.app._route.path !== '/') {
				router.push('/');
			}
		},
		initLogoutTimer({ dispatch }, expiresIn) {
			// kills the running instance of set timeout if the user logs in again.
			clearTimeout();

			setTimeout(() => {
				dispatch('logout');
			}, expiresIn * 1000); // 1hr
		}
	},
	getters: {
		getAuthData(state) {
			return state.authData;
		},
		getAuthToken(state) {
			return state.authData.token;
		},
		getAuthStatus(state) {
			return state.authStatus;
		}
	}
};

export default auth;