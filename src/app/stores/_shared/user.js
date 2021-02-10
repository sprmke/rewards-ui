const user = {
	state: {
		userData: {
			id: null,
			name: null,
			email: null,
			rewards: []
		}
	},
	mutations: {
		setUserData(state, userData) {
      state.userData = userData;
    },
    clearUserData(state) {
      state.userData = {
				id: null,
				name: null,
				email: null,
				rewards: []
			}
    },
	},
	getters: {
		getUserData(state) {
			return state.userData;
		},
		getUserName(state) {
			return state.userData.name;
		}
	}
};

export default user;