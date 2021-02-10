// Libraries
import store from '@/app/stores/store.js';

// Constants
import { TOKEN } from '@/app/utils/constants/app-constants.js';

export const apiInterceptor = (instance) => {
	instance.interceptors.request.use(config => {
		// add token to req headers
		const authToken = store.getters.getAuthToken;
		
		if (authToken) {
			config.headers['Authorization'] = `Bearer ${authToken}`;
		}
	
		return config;
	}, function (error) {
		return Promise.reject(error);
	});

	instance.interceptors.response.use(response =>  {
		// redirect to login if token has expired
		if (response.data && 
			response.data.status && 
			response.data.status.message === TOKEN.EXPIRY.message) {
			store.dispatch('logout');
		}

		return response;
	}, function (error) {
		return Promise.reject(error);
	});
}