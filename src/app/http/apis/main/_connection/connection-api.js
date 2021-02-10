// Axios
import axios from 'axios';

// Endpoints
import { ENDPOINTS_POST, ENDPOINTS_PUT, ENDPOINTS_GET, ENDPOINTS_DELETE } from '@/app/http/apis/main/_connection/connection-endpoints.js';

// Interceptor
import { apiInterceptor } from '@/app/http/apis/main/_connection/connection-interceptors.js';

// API Instance
export const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
	headers: {},
	timeout: 20000, // 20 seconds
	validateStatus: status => {
		return status;
	},
});

// API Interceptors
apiInterceptor(instance);

// API Methods
export const API = {
	post(endpoint, formData) {
		return instance.post(endpoint, formData);
	},
	put(endpoint, formData) {
		return instance.put(endpoint, formData);
	},
	get(endpoint, params) {
		return instance.get(endpoint, { params });
	},
	delete(endpoint) {
		return instance.delete(endpoint);
	},
	patch(endpoint, formData) {
		return instance.patch(endpoint, formData);
	}
}

// API Endpoints
export const ENDPOINTS = {
	...ENDPOINTS_POST,
	...ENDPOINTS_PUT,
	...ENDPOINTS_GET,
	...ENDPOINTS_DELETE
}