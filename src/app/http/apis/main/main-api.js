// Instance
import { instance } from '@/app/http/apis/main/_connection/connection-api.js';

export default class MainAPI {
	constructor() {
		this.axios = instance;
	}

	/**
	 * @param {*} targetFile
	 * @return - test
	 */
	reusableAPIMethod(targetFile) {
		return 'test';
	}
}
