const user = {
	state: {
		userData: {}
	},
	mutations: {
		setUserData(state, userData) {
      state.userData = userData;
    },
    clearUserData(state) {
      state.userData = null;
    },
	},
	getters: {
		getUserData(state) {
			return state.userData;
		}
	}
};

export default user;