// Libraries
import store from '@/app/stores/store.js';

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
		return response;
	}, function (error) {
		return Promise.reject(error);
	});
}