export const apiInterceptor = (instance) => {
	instance.interceptors.request.use(config => {
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