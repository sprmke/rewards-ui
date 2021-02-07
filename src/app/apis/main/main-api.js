// Instance
import { instance } from '@/app/apis/main/_connection/connection-api.js';

export default class MainAPI {
	constructor() {
		this.axios = instance;
	}

	/**
	 * @param {*} targetFile
	 * @return - (string) ex. ?q=blah123&f_formReportId=1&f_statusId=3&sortBy=title&desc=true&page=1&limit=20
	 */
	reusableAPIMethod(targetFile) {
		return 'test';
	}
}
